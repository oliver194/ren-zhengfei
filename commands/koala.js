const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "koala",
  description: "Command providing a random koala image",
  execute(message, args, config) {
    if (message.channel.id !== config.animal_images_channel) {
      message
        .reply(`This command can only be used in <#${config.animal_images_channel}>`)
        .then((msg) => {
          setTimeout(() => {
            msg.delete();
            message.delete();
          }, 5000);
        });
      return;
    }
    config.request("GET", "https://some-random-api.ml/img/koala").then((response) => {
      response.json().then((data) => {
        const koalaEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a koala!")
          .setImage(data.link)
          .setTimestamp()
          .setFooter({ text: "Powered by some-random-api.ml" });
        message.reply({ embeds: [koalaEmbed] });
      });
    });
  },
};
