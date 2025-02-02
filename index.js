const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Replace with your bot token and channel ID
const token = process.env.token;
const GUILD_ID = process.env.GUILD_ID;  // Your server ID
const VC_ID = process.env.VC_ID;  // Your voice channel ID

const bot = new Eris(token);

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  try {
    // Get the guild and channel
    const guild = bot.guilds.get(GUILD_ID);
    const channel = guild.channels.get(VC_ID);

    if (channel && channel.type === 2) {  // Ensure it's a voice channel
      // Join the voice channel
      await channel.join();
      console.log("Successfully joined the voice channel!");
    } else {
      console.log("Channel is not a voice channel or is invalid.");
    }
  } catch (error) {
    console.error("Error joining VC:", error);
  }
});

bot.on("error", (err) => {
  console.error("Bot error:", err);
});

bot.connect(); // Connect the bot to Discord
