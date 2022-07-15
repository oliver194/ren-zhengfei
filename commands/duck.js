const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "duck",
  description: "Command providing a random duck image",
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
    config.request("GET", "https://random-d.uk/api/random").then((response) => {
      response.json().then((data) => {
        const duckEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a duck!")
          .setImage(data.url)
          .setTimestamp()
          .setFooter({ text: "Powered by random-d.uk" });
        message.reply({ embeds: [duckEmbed] });
      });
    });
  },
};
