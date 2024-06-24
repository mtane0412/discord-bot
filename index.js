require("dotenv").config();
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: process.env.DISCORD_BOT_TOKEN, // Here goes the Token you copied earlier!
    prefix: "!", // Here goes the prefix you want to use for your bot!
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: process.env.SECURITY_KEY
    }
});

// Ping Command which responds when doing "!ping"
client.command({
    name: "ping",
    code: `Pong! $pingms`
});

client.loadCommands("./commands");