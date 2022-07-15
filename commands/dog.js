const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dog",
  description: "Command providing a random dog image",
  execute(message, args, config) {
    config.request("GET", "https://dog.ceo/api/breeds/image/random").then((response) => {
      response.json().then((data) => {
        const dogEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a dog!")
          .setImage(data.message)
          .setTimestamp()
          .setFooter({ text: "Powered by dog.ceo" });
        message.reply({ embeds: [dogEmbed] });
      });
    });
  },
};
