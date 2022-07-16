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
          { name: "Image commands:", value: "```!cat - sends a cat image\n!fox - sends a fox image\n!dog - sends a dog image\n!lizard - sends a lizard image\n!duck - sends a duck image.\n!rpanda - sends a red panda image\n!kangaroo - sends a kangaroo image\n!koala - sends a koala image\n!raccoon - sends a raccoon image```", inline: true },
          { name: "Fact commands:", value: "```!catfact - sends a cat fact\n!dogfact - sends a dog fact\n!birdfact - sends a bird fact\n!pfact - sends a panda fact\n!kfact - sends a koala fact\n!rfact - sends a raccoon fact```", inline: true }
      )
      .setTimestamp()
      .setFooter({ text: "Version " + config.version });
    message.reply({ embeds: [animalsEmbed] });
  },
};
