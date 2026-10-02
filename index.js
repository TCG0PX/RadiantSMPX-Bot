const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "RadiantSMPX.aternos.me",
  port: 61601,
  username: "RadiantBot",
  version: "1.21.11"
});

bot.once("spawn", () => {
  console.log("RadiantBot joined RadiantSMPX!");

  // Walk forward
  bot.setControlState("forward", true);

  // Jump every 3 seconds
  setInterval(() => {
    bot.setControlState("jump", true);

    setTimeout(() => {
      bot.setControlState("jump", false);
    }, 500);
  }, 3000);
});

bot.on("end", () => {
  console.log("Bot disconnected.");
});

bot.on("error", (err) => {
  console.log("Bot error:", err.message);
});
