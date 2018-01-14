var raspio = require("raspi-io");
var five = require("johnny-five");
var board = new five.Board(
    {
        io: new raspio()
    });

board.on("ready", function() {
    var led = new five.Led("P1-12");

    this.repl.inject(
        {
            redLed: led
        });
});