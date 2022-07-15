const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cat",
  description: "Command providing a random cat image",
  execute(message, args, config) {
    if (message.channel.id !== config.animal_images_channel) {
      message
        .reply("This command can only be used in the animal images channel!")
        .then((msg) => {
          setTimeout(() => {
            msg.delete();
            message.delete();
          }, 5000);
        });
      return;
    }
    config.request("GET", "https://aws.random.cat/meow").then((response) => {
      response.json().then((data) => {
        const catEmbed = new MessageEmbed()
          .setColor(config.color)
          .setTitle("Here's a cat!")
          .setImage(data.file)
          .setTimestamp()
          .setFooter({ text: `Powered by aws.random.cat` });
        message.reply({ embeds: [catEmbed] });
      });
    });
  },
};
