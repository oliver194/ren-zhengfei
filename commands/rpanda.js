const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rpanda",
  description: "Command providing a random red panda image",
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
    config.request("GET", "https://some-random-api.ml/img/red_panda").then((response) => {
      response.json().then((data) => {
        const rPandaEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a red panda!")
          .setImage(data.link)
          .setTimestamp()
          .setFooter({ text: "Powered by some-random-api.ml" });
        message.reply({ embeds: [rPandaEmbed] });
      });
    });
  },
};
