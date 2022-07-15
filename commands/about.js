const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "about",
  description: "Command providing information about the bot",

  execute(message, args, config) {
    const BotInfoEmbed = new MessageEmbed()
      .setColor(config.color)
      .setTitle("About Ren Zhengfei")
      .setDescription(
        "This bot was made by ValerieOSS, oliver193 and TriDiscord.\nSource available on GitHub"
      )
      .setTimestamp()
      .setFooter({ text: "Version " + config.version });
    message.reply({ embeds: [BotInfoEmbed] });
  },
};
