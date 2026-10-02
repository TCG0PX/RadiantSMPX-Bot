const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: "RadiantSMPX.aternos.me",
    port: 61601,
    username: "RadiantBot",
    version: "1.21.11"
  });

  bot.once("spawn", () => {
    console.log("RadiantBot joined!");

    let directions = ["forward", "left", "back", "right"];
    let index = 0;

    function move() {
      // Stop previous movement
      bot.clearControlStates();

      // Move in the next direction
      bot.setControlState(directions[index], true);

      // Jump
      bot.setControlState("jump", true);

      setTimeout(() => {
        bot.setControlState("jump", false);
      }, 500);

      index = (index + 1) % directions.length;
    }

    move();
    setInterval(move, 5000);
  });

  bot.on("end", () => {
    console.log("Disconnected. Reconnecting in 10 seconds...");
    setTimeout(createBot, 10000);
  });

  bot.on("error", (err) => {
    console.log("Error:", err.message);
  });
}

createBot();
