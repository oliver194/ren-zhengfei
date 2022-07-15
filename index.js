const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

var config = {
  version: "1.1.4-a1",
  prefix: process.env.PREFIX,
  animal_images_channel: process.env.ANIMAL_CHANNEL_ID,
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log(
    `\nVariables:\nprefix: ${config.prefix}\nanimal_images_channel: ${config.animal_images_channel}`
  );
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  if (message.channel.type === "dm") return;
  if (msg.content.indexOf(config.prefix) !== 0) return;
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.execute(msg, args, config);
  } catch (err) {
    if (err.code === "MODULE_NOT_FOUND") {
      msg.reply("Invalid command!").then((msg) => {
        setTimeout(() => msg.delete(), 5000);
      });
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
