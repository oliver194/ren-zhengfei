const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "neko",
  description: "Command providing a random neko image",
  execute(message, args, config) {
    if (message.channel.id !== '996019749911789618') {
      message
        .reply("This command can only be used in <#996019749911789618>")
        .then((msg) => {
          setTimeout(() => {
            msg.delete();
            message.delete();
          }, 5000);
        });
      return;
    }
    config.request("GET", "https://nekos.life/api/v2/img/neko").then((response) => {
      response.json().then((data) => {
        const nekoEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a neko!")
          .setImage(data.url)
          .setTimestamp()
          .setFooter({ text: "Powered by nekos.life" });
        message.reply({ embeds: [nekoEmbed] });
      });
    });
  },
};
