const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dog",
  description: "Command providing a random dog image",
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
