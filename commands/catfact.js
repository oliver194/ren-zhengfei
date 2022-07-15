const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "catfact",
  description: "Command providing a random cat fact",
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
    config.request("GET", "https://catfact.ninja/fact").then((response) => {
      response.json().then((data) => {
        const catfactEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a random cat fact!")
          .setDescription(data.fact)
          .setTimestamp()
          .setFooter({ text: "Powered by catfact.ninja" });
        message.reply({ embeds: [catfactEmbed] });
      });
    });
  },
};
