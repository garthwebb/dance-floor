from builtins import object
import json
from time import time
import logging
from floor.processor.base import Base as ProcessorBase
import os
import re

logger = logging.getLogger('playlist')


class PlaylistError(Exception):
    """Top-level error for Playlist class."""


class ProcessorNotFound(PlaylistError):
    """Thrown when attempting to append an unknown processor."""


class PlaylistItem:
    """An immutable holder of a playlist entry."""
    def __init__(self, processor_cls, title=None, duration=None, processor_args=None):
        assert issubclass(processor_cls, ProcessorBase), '{} is not a subclass of processor.Base'.format(processor_cls)
        self.processor_cls = processor_cls
        self.processor_args = processor_args or {}
        self.duration = int(duration) if duration is not None else None
        self.title = title or self.processor_cls.__name__

    @classmethod
    def from_object(cls, obj, all_processors):
        processor_name = obj['name']
        processor = all_processors.get(processor_name)
        if processor is None:
            raise ProcessorNotFound('Processor "{}" is unknown'.format(processor_name))
        title = obj.get('title')
        duration = obj.get('duration')
        processor_args = obj.get('args')
        return cls(processor, title=title, duration=duration, processor_args=processor_args)

    def to_object(self):
        return {
            'name': self.processor_cls.__name__,
            'title': self.title,
            'duration': self.duration,
            'args': self.processor_args,
        }


class Playlist(object):
    def __init__(self, title):
        self.title = title
        # The index into the queue array
        self.position = None
        # Time when the playlist should auto advance.
        self.next_advance = None
        self.queue = []
        self.running = True

    @classmethod
    def from_file(cls, all_processors, filename, strict=False):
        playlist = cls('Playlist')
        playlist.load_from(filename, all_processors, strict=strict)
        return playlist

    @classmethod
    def from_single_processor(cls, processor_cls, args=None):
        playlist = cls('Playlist')
        playlist.append(PlaylistItem(processor_cls, processor_args=args))
        return playlist

    def __len__(self):
        return len(self.queue)

    def clear(self):
        self.position = None
        self.next_advance = None
        self.queue = []

    def load_from(self, input_filename, all_processors, strict=False):
        """Replaces the current playlist with contents of the file."""
        self.clear()
        with open(input_filename) as json_data:
            json_items = json.load(json_data).get('queue', [])
            for item_json in json_items:
                try:
                    item = PlaylistItem.from_object(item_json, all_processors)
                except ProcessorNotFound as e:
                    if strict:
                        raise e
                    else:
                        logger.warning(e)
                else:
                    self.append(item)

    def save_to(self, output_filename):
        playlist = {
            'queue': self.queue,
            'title': self.title,
        }
        with open(output_filename, 'w') as fp:
            fp.write(json.dumps(playlist, indent=2))
            fp.write('\n')

    def is_running(self):
        return self.running

    def stop_playlist(self):
        current = self.queue[self.position]

        # Save time remaining
        if self.next_advance is not None:
            current['remaining_duration'] = self.next_advance - time()
        else:
            current['remaining_duration'] = None
        self.next_advance = None

        self.running = False

    def start_playlist(self):
        current = self.queue[self.position]

        if current['remaining_duration'] is not None:
            # Restore time remaining
            self.next_advance = time() + current['remaining_duration']
        else:
            self.next_advance = None

        self.running = True

    def append(self, item):
        """Add an item at the end of the playlist."""
        self.queue.append(item)
        return len(self.queue) - 1

    def insert_next(self, item):
        """Add an item at the current position in the playlist."""
        position = self.position
        position = max(0, position)  # handle position=-1
        self.queue.insert(self.position, item)
        return position

    def get_current(self):
        """Get the current item, advancing if it's time to."""
        if not self.queue:
            return None

        if self.position is None:
            # First call: Start the first item.
            self.advance()
        elif self.next_advance is not None and (time() > self.next_advance):
            self.advance()

        return self.queue[self.position]

    def advance(self):
        """Go to the next playlist item."""
        if self.position is None:
            position = 0
        else:
            position = (self.position + 1) % len(self.queue)
        self.go_to(position)

    def previous(self):
        """Go to the previous playlist item."""
        if self.position is None:
            position = 0
        else:
            position = (self.position - 1) % len(self.queue)
        self.go_to(position)

    def go_to(self, position):
        """Go to a specific playlist item."""
        if not self.is_running():
            return

        queue_length = len(self.queue)
        if position >= queue_length:
            raise ValueError('Position {} out of range ({})'.format(position, queue_length))
        self.position = position

        current = self.queue[self.position]
        if current.duration:
            self.next_advance = time() + current.duration
        else:
            self.next_advance = None

        logger.info('Advanced to: {} (position={})'.format(current.title, self.position))

    def remove(self, position):
        """Removes an item from the playlist. If removing the current item,
        advances to the next item as a side-effect.
        """
        if position >= len(self.queue) or position < 0:
            raise ValueError('Position {} out of range ({})'.format(position, len(self.queue)))
        if len(self.queue) == 1:
            raise ValueError('Cannot delete the last item in playlist.')

        del self.queue[position]
        if position < self.position:
            # Position was behind current.
            self.position -= 1
        elif position == self.position:
            # Removed current.
            self.position -= 1
            self.advance()
        else:
            # Position was ahead of current.
            pass

    def stay(self):
        self.next_advance = None


class PlaylistManager:
    PLAYLIST_NAME_DEFAULT = 'default'
    PLAYLIST_NAME_RE = re.compile('[0-9a-zA-Z_\s]+')

    def __init__(self, default_playlist, user_playlists_dir=None):
        self.default_playlist = default_playlist
        self.user_playlists_dir = user_playlists_dir
        self.user_playlists = {}
        self.current_playlist = self.default_playlist
        self.logger = logging.getLogger('PlaylistManager')

    def initialize(self, all_processors):
        """Load all uer playlists into memory."""
        if not self.user_playlists_dir or not os.path.isdir(self.user_playlists_dir):
            return
        all_playlists = os.listdir(self.user_playlists_dir)
        for filename in all_playlists:
            if not filename.endswith('.json'):
                continue
            full_path = os.path.join(self.user_playlists_dir, filename)
            self._load_playlist_from_file(full_path, all_processors)

    def _load_playlist_from_file(self, filename, all_processors):
        base_name = os.path.basename(filename)
        playlist_name = os.path.splitext(base_name)[0].lower()
        playlist = Playlist(playlist_name)
        playlist.load_from(filename, all_processors)
        self.user_playlists[playlist_name] = playlist
        self.logger.info('Loaded playlist "{}"'.format(playlist_name))
        return playlist_name, playlist

    def get_playlist(self, name):
        if name == self.PLAYLIST_NAME_DEFAULT:
            return self.default_playlist
        return self.user_playlists.get(name)

    def save_playlist(self, name):
        name = name.lower()
        if not self.PLAYLIST_NAME_RE.match(name):
            raise ValueError('Illegal playlist name: "{}"'.format(name))

        if name == self.PLAYLIST_NAME_DEFAULT:
            self.logger.warning('save_playlist: saving the default playlist is not allowed.')
            return

        playlist = self.user_playlists.get(name)
        if not playlist:
            self.logger.warning('save_playlist: playlist "{}" not found'.format(name))
            return

        output_filename = os.path.join(self.user_playlists_dir, '{}.json'.format(name))
        playlist.save_to(output_filename)

    def get_current_playlist(self):
        return self.current_playlist

    def get_all_playlists(self):
        result = {
            'default': self.default_playlist,
        }
        result.update(self.user_playlists)
        return result

    def set_current_playlist(self, name):
        if name is self.PLAYLIST_NAME_DEFAULT:
            self.current_playlist = self.default_playlist
        elif name in self.user_playlists:
            self.current_playlist = self.user_playlists[name]
        else:
            self.logger.warning('set_current_playlist: Unknown playlist: "{}"'.format(name))

    def advance(self):
        """Convenience proxy for self.get_current_playlist().advance()"""
        return self.current_playlist.advance()

    def previous(self):
        """Convenience proxy for self.get_current_playlist().previous()"""
        return self.current_playlist.previous()

    def start_playlist(self):
        """Convenience proxy for self.get_current_playlist().start_playlist()"""
        return self.current_playlist.start_playlist()

    def stay(self):
        """Convenience proxy for self.get_current_playlist().stay()"""
        return self.current_playlist.stay()

    def stop_playlist(self):
        """Convenience proxy for self.get_current_playlist().stop_playlist()"""
        return self.current_playlist.stop_playlist()

    def go_to(self, position):
        """Convenience proxy for self.get_current_playlist().go_to(position)"""
        return self.current_playlist.go_to(position)