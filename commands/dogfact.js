const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dogfact",
  description: "Command providing a dog fact",
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
    config.request("GET", "https://some-random-api.ml/facts/dog").then((response) => {
      response.json().then((data) => {
        const dogfactEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a random dog fact!")
          .setDescription(data.fact)
          .setTimestamp()
          .setFooter({ text: "Powered by some-random-api.ml" });
        message.reply({ embeds: [dogfactEmbed] });
      });
    });
  },
};
