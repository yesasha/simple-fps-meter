# Simple-FPS-Meter
Extremely small and simple fps meter widget.

## Features
- Meters and displays current FPS using requestAnimationFrame method.
- No external dependencies, no jquery.
- All modern browsers support.
- ~300 bytes(!) compressed javascript(not gzip)!
- No need to write any javascript code, just connect the script to your page, and insert a `<div class="simple-fps-meter"></div>` to your page.
- Position and style it with css. Some default css provided to make it visible on different backgrounds.
- May have any number of widgets per page, that will be detected automatically. No extra code edits!
- Example page - https://yesasha.github.io/simple-fps-meter/

## TODO
- Add configurable options, like update frequency. Now it is set to once per second.
- Add more default styles to choose from.
- Make an option to create a widget automatically, without need to create a div and style it with css.
- Make a bookmarklet, that when pressed, adds this widget to any other page.
- Fix current default styles to make it more stylish if users request.

## Usage
0. Look at example index.html or here - https://yesasha.github.io/simple-fps-meter/.
1. Connect css `<link rel="stylesheet" type="text/css" href="css/simple-fps-meter.css">`.
2. Connect js `<script src="js/simple-fps-meter.min.js"></script>`.
3. Create `div`, specifying the class `<div class="simple-fps-meter"></div>`.
4. Create more `div`s and/or style them at your taste.
