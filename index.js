const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

// Voice channel details
const GUILD_ID = "YOUR_GUILD_ID"; // Replace with your server ID
const VC_ID = "YOUR_VOICE_CHANNEL_ID"; // Replace with your voice channel ID

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online and joining VC...`);

    try {
        await bot.joinVoiceChannel(VC_ID); // Join the VC
        console.log("Successfully joined voice channel!");
    } catch (error) {
        console.error("Error joining VC:", error);
    }
});

bot.on("error", (err) => {
    console.error(err);
});

bot.connect(); // Connect the bot to Discord
