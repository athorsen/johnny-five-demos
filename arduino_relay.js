var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    this.repl.inject(
        {
            relay: new five.Relay(
                {
                    pin: 12,
                    type: "NC"
                })
        });
});