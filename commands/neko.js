const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "neko",
  description: "Command providing a random neko image",
  execute(message, args, config) {
    config.request("GET", "https://nekos.life/api/v2/img/neko").then((response) => {
      response.json().then((data) => {
        const duckEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a neko!")
          .setImage(data.url)
          .setTimestamp()
          .setFooter({ text: "Powered by nekos.life" });
        message.reply({ embeds: [duckEmbed] });
      });
    });
  },
};
