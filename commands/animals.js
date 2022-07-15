const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "animals",
  description: "Lists the animal commands.",

  execute(message, args, config) {
    const animalsEmbed = new MessageEmbed()
      .setColor(config.color)
      .setTitle("Animal commands")
      .setDescription(`See the list below for available commands.\n**THE COMMANDS LISTED HERE ARE ONLY USABLE IN <#${config.animal_images_channel}>**`)
      .addFields(
          { name: "Image commands:", value: "```!cat - sends a random cat image\n!fox - sends a random fox image\n!dog - sends a random dog image\n!lizard - sends a random lizard image\n!duck - sends a random duck image.\n!rpanda - sends a random red panda image\n!kangaroo - sends a random kangaroo image```", inline: true },
          { name: "Fact commands:", value: "```!catfact - sends a random cat fact\n!dogfact - sends a random dog fact\n!birdfact - sends a random bird fact\n!pfact - sends a random panda fact```", inline: true }
      )
      .setTimestamp()
      .setFooter({ text: "Version " + config.version });
    message.reply({ embeds: [animalsEmbed] });
  },
};
