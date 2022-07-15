const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pfact",
  description: "Command providing a random panda fact",
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
    config.request("GET", "https://some-random-api.ml/facts/panda").then((response) => {
      response.json().then((data) => {
        const pfactEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a random panda fact!")
          .setDescription(data.fact)
          .setTimestamp()
          .setFooter({ text: "Powered by some-random-api.ml" });
        message.reply({ embeds: [pfactEmbed] });
      });
    });
  },
};
