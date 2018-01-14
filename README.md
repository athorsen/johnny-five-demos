## johnny-five-demos ##
All of the source code from my training videos on the Johnny-Five robotics framework.

## Installation ##

In order to install the necessary packages for the Arduino demos on your PC, just simply run the NPM *install* command after cloning this repository:

	git clone https://github.com/athorsen/johnny-five-demos.git
	npm install

**NOTE:** For the Raspberry Pi demo(s), you will need to make sure you have Node.js installed on your Raspberry Pi, and then you will need to install the raspi-io package directly on your Raspberry Pi, as well. 

	npm install raspi-io

This package is not included in the package.json file as a dependency, because it does not install properly on a PC.

## Usage ##

Each of the demos can be run directly with Node.js. For example, to run the Arduino LED demo, you would just punch this into your command line:

	node .\arduino_led.js

**NOTE: ** The xbox360-controller is a dependent module, and is used by the *arduino_tank* demo, so you cannot run it directly with Node.js like the other demos.

If you would like to use the controller module in your own applications, please refer to the README in [its repository](https://github.com/athorsen/xbox360-controller).