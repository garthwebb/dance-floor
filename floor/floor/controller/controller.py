import time
import logging
from floor import processor
from floor.processor.base import RenderContext

logger = logging.getLogger('controller')


class Controller(object):
    DEFAULT_FPS = 24
    DEFAULT_BPM = 120.0
    MAX_RANGED_VALUES = 4

    # Give outside controllers a chance to fake foot steps on the floor
    # Use the SYNTHETIC_WEIGHT_ACTIVE flag to determine if we need to spend
    # cycles mixing in the weight values.
    SYNTHETIC_WEIGHT_ACTIVE = False
    SYNTHETIC_WEIGHTS = [0]*64

    def __init__(self, driver, playlist, clocksource=time):
        """Constructor.
        
        Arguments:
            driver {floor.driver.Base} -- The driver powering the show
            playlist {floor.playlist.Playlist} -- The show's playlist
        
        Keyword Arguments:
            clocksource {function} -- An object that should have `.time()`
            and `.sleep()` methods (default: {time})
        """

        self.driver = driver
        self.playlist = playlist
        self.clocksource = clocksource
        self.processor = None  # type: processor.Base
        self.frame_start = 0
        self.fps = None
        self.frame_seconds = None

        self.processors = processor.all_processors()

        # The name of the current processor
        self.current_processor = None
        self.current_args = None

        self.set_fps(self.DEFAULT_FPS)

        self.bpm = None
        self.downbeat = None
        self.set_bpm(self.DEFAULT_BPM)

        # Max value is dictated by the driver used
        self.max_led_value = self.driver.get_max_led_value()

        # Effective max value accounts for any scaling factor in effect (e.g. to reduce brightness)
        self.max_effective_led_value = self.max_led_value

        # Maximum sensor value.
        self.max_floor_value = self.driver.get_max_floor_value()

        self.ranged_values = [0] * self.MAX_RANGED_VALUES

    def set_fps(self, fps):
        self.fps = fps
        self.frame_seconds = 1.0/fps

    def set_bpm(self, bpm, downbeat=None):
        logger.info('Setting bpm to: {}'.format(bpm))
        self.bpm = float(bpm)
        self.downbeat = downbeat or self.clocksource.time()
        if self.processor:
            self.processor.set_bpm(bpm, self.downbeat)

    def scale_brightness(self, factor):
        """Scale the default brightness from 0 to max for driver

        :param factor: a scaling factor from 0.0 to 1.0
        :return: none
        """

        logger.info('Setting brightness to: {}%'.format(int(factor*100)))
        new_max = int(factor * self.max_led_value)

        self.processor.set_max_value(new_max)

    def square_weight_on(self, index):
        if index > 63 or index < 0:
            logger.error("Ignoring square_weight_on() value beyond bounds")
            return
        self.SYNTHETIC_WEIGHTS[index] = self.max_floor_value
        self.SYNTHETIC_WEIGHT_ACTIVE = True

    def square_weight_off(self, index):
        if index > 63 or index < 0:
            logger.error("Ignoring square_weight_on() value beyond bounds")
            return
        self.SYNTHETIC_WEIGHTS[index] = 0

        # Scan the weighs and see if anything is still set
        for value in self.SYNTHETIC_WEIGHTS:
            if value:
                return

        # If nothing is set, there are no longer any synthetic weights active
        self.SYNTHETIC_WEIGHT_ACTIVE = False

    def handle_ranged_value(self, control_number, control_value):
        if control_number > self.MAX_RANGED_VALUES:
            logger.warning('Ignoring MIDI control {}, greater than {}'.format(control_number, self.MAX_RANGED_VALUES))

        # Capture state.
        self.ranged_values[control_number] = control_value
        # Update current processor.
        if self.processor:
            self.processor.on_ranged_value_change(control_number, control_value)

    def set_processor(self, processor_name, processor_args=dict):
        """Sets the active processor, which must already be loaded into
        `self.processors`.

        Raises `ValueError` if processor is unknown.
        """
        self.processor = self.build_processor(processor_name, processor_args)
        self.processor.set_bpm(self.bpm, self.downbeat)

        fps = self.processor.requested_fps() or self.DEFAULT_FPS
        self.set_fps(fps)

        self.current_processor = processor_name
        self.current_args = processor_args

        logger.info("Started processor '{}' at {} fps".format(processor_name, fps))

    def build_processor(self, name, args=None):
        """Builds a processor instance."""
        args = args or {}
        processor_cls = self.processors.get(name)
        if not processor_cls:
            raise ValueError('Processor "{}" does not exist'.format(name))
        try:
            return processor_cls(**args)
        except Exception as e:
            raise ValueError('Processor "{}" could not be created: {}'.format(name, str(e)))

    def run_forever(self):
        while True:
            self.run_one_frame()

    def run_one_frame(self):
        if not self.playlist.is_running():
            # If the playlist is stopped/paused, sleep a bit then restart the loop
            self.sleeper(0.5)
            return

        self.init_loop()
        self.check_playlist()
        self.generate_frame()
        self.transfer_data()
        self.delay()

    def init_loop(self):
        self.frame_start = self.clocksource.time()

    def check_playlist(self):
        item = self.playlist.get_current()
        if not item:
            return

        processor_name, args = item['name'], item['args']
        if processor_name and (processor_name, args) != (self.current_processor, self.current_args):
            logger.debug('Loading processor {}'.format(processor_name))
            self.set_processor(processor_name, args)
            # Make sure the processor is limited to the bit depth of the driver
            self.processor.set_max_value(self.max_effective_led_value)

    def generate_frame(self):
        if not self.processor:
            return

        context = RenderContext(
            clock=self.frame_start,
            downbeat=self.downbeat,
            weights=self.get_weights(),
            bpm=self.bpm,
        )

        try:
            leds = self.processor.get_next_frame(context)
        except KeyboardInterrupt:
            raise
        except Exception:
            logger.exception('Error generating frame for processor {}'.format(self.processor))
            logger.warning('Removing processor due to error.')
            self.playlist.remove(self.playlist.position)
        else:
            self.driver.set_leds(leds)

    def get_weights(self):
        weights = self.driver.get_weights()
        if self.SYNTHETIC_WEIGHT_ACTIVE:
            for idx in range(64):
                val = self.SYNTHETIC_WEIGHTS[idx]
                if val:
                    weights[idx] = val

        return weights

    def transfer_data(self):
        self.driver.send_data()
        self.driver.read_data()

    def delay(self):
        elapsed = self.clocksource.time() - self.frame_start

        if elapsed < self.frame_seconds:
            self.clocksource.sleep(self.frame_seconds - elapsed)
        else:
            logger.debug("Over by {}".format(elapsed - self.frame_seconds))
