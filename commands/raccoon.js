const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "raccoon",
  description: "Command providing a random raccoon image",
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
    config.request("GET", "https://some-random-api.ml/img/raccoon").then((response) => {
      response.json().then((data) => {
        const raccoonEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a raccoon!")
          .setImage(data.link)
          .setTimestamp()
          .setFooter({ text: "Powered by some-random-api.ml" });
        message.reply({ embeds: [raccoonEmbed] });
      });
    });
  },
};
