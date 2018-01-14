var five = require('johnny-five');
var board = new five.Board({port: "COM3"});
var configs = five.Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_3;
var Xbox360Controller = require('./xbox360-controller');

board.on('ready', function(){
  var controller = new Xbox360Controller();
  var rightMotor = new five.Motor(configs.A);
  var leftMotor = new five.Motor(configs.B);

  controller.on('pressed', function(buttonName){
    switch(buttonName) {
      case "UP":
        rightMotor.fwd(255);
        leftMotor.fwd(255);
        break;
      case "DOWN":
        rightMotor.rev(255);
        leftMotor.rev(255);
        break;
      case "LEFT":
        rightMotor.fwd(255);
        break;
      case "RIGHT":
        leftMotor.fwd(255);
        break;
    }
  });

  controller.on('released', function() {
    rightMotor.stop();
    leftMotor.stop();
  });

  var controlMotor = function(motor, position) {
    if (position === 0) {
      motor.stop();
    } else {
      var speed = Math.abs(position) * 255;

      if (position > 0) {
        motor.fwd(speed);
      } else {
        motor.rev(speed);
      }
    }
  };

  controller.on('move', function(axisName, position) {
    if (axisName === 'LEFT_Y') {
      controlMotor(leftMotor, position);
    } else if (axisName === 'RIGHT_Y') {
      controlMotor(rightMotor, position);
    }
  });

  controller.init();
});
