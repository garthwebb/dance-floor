# Processor Code

## Creating a new processor

1. Start with the skeleton for a processor:
```python
from floor.processor.base import Base


class YourPattern(Base):

    def __init__(self, **kwargs):
        super(YourPattern, self).__init__(**kwargs)
        # Set/initialize any state variables here

    def get_next_frame(self, context):
        # This gets called once every 1/fps seconds

        # Do something with list of context.weight values

        # Compute a list of RGB tuples, limit by self.max_value
        # which gets set for you based on driver at object creation

        return pixels
```
2. Create code in `gen_next_frame` that creates a single frame of 64 RGB values.  The dance floor is 8 x 8 so if you want to work with x and y coordinates, you can do `pixels[x + y*8]` to index into the array as if it were multidimensional.
3. Import the processor in `processor/__init__.py`.
4. To test, call your class from the command line by giving the file name (make sure [gl_sever is running](https://github.com/garthwebb/dance-floor/blob/master/floor/README.md#running-the-code)):
```bash
python run-show.py --driver opc --processor your_class_file
```
