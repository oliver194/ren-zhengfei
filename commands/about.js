const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "about",
  description: "Command providing information about the bot",

  execute(message, args, config) {
    const BotInfoEmbed = new MessageEmbed()
      .setColor(config.color)
      .setTitle("About Ren Zhengfei")
      .setDescription("This bot was made by ValerieOSS, oliver193 and TriDiscord.")
      .addFields(
          { name: "Source", value: "[GitHub](https://github.com/oliver194/ren-zhengfei)", inline: true },
          { name: "Node.JS Version", value: `${config.nodejs}`, inline: true }
      )
      .setTimestamp()
      .setFooter({ text: "Version " + config.version });
    message.reply({ embeds: [BotInfoEmbed] });
  },
};
