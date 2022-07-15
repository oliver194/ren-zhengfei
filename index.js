const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const { MessageEmbed } = require('discord.js');

var version = "1.1.4-a1";

var PREFIX = process.env.PREFIX;
var ANIMAL_IMAGES_CHANNEL = process.env.ANIMAL_CHANNEL_ID;
var TOKEN = process.env.DISCORD_TOKEN;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    console.log(
        "Currently set variables:\n" +
        "ANIMAL_CHANNEL_ID: " + ANIMAL_IMAGES_CHANNEL + "\n" +
        "TOKEN:" + TOKEN
    )

});

client.on('messageCreate', msg => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(PREFIX) !== 0) return;
    const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.execute(msg, args);
    } catch (err) {
        console.error(err);
    }
}
);

client.login(TOKEN);
