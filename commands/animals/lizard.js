const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "lizard",
  description: "Command providing a random lizard image",
  execute(client, message, args, config) {
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
    config.request("GET", "https://nekos.life/api/v2/img/lizard").then((response) => {
      response.json().then((data) => {
        const lizardEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a lizard!")
          .setImage(data.url)
          .setTimestamp()
          .setFooter({ text: "Powered by nekos.life" });
        message.reply({ embeds: [lizardEmbed] });
      });
    });
  },
};
