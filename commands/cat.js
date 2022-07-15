const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cat",
  description: "Command providing a random cat image",
  execute(message, args, config) {
    config.request("GET", "https://aws.random.cat/meow").then((response) => {
      response.json().then((data) => {
        const catEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a cat!")
          .setImage(data.file)
          .setTimestamp()
          .setFooter({ text: `Powered by aws.random.cat • Version ${config.version}` });
        message.reply({ embeds: [catEmbed] });
      });
    });
  },
};
