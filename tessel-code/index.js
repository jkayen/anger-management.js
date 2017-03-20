// Import the interface to Tessel hardware
var tessel = require('tessel');
var camera = require('./camera/camera.js');
var motor = require('./motor/motor.js');
// // Turn one of the LEDs on to start.
// tessel.led[2].on();

// // Blink!
// setInterval(function () {
//   tessel.led[2].toggle();
//   tessel.led[3].toggle();
// }, 100);

// console.log("I'm blinking! (Press CTRL + C to stop)");
console.log(camera());
