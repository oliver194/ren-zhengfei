const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "fox",
  description: "Command providing a random fox image",
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
    config.request("GET", "https://randomfox.ca/floof").then((response) => {
      response.json().then((data) => {
        const foxEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a fox!")
          .setImage(data.image)
          .setTimestamp()
          .setFooter({ text: "Powered by randomfox.ca" });
        message.reply({ embeds: [foxEmbed] });
      });
    });
  },
};
