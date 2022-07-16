const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("animals")
  .setDescription("Lists the animal commands.");

async function execute(client, interaction, subinteraction, config) {
  if (interaction.isButton()) {
    if (interaction.user.id !== subinteraction.user.id) {
      return;
    }
    if (interaction.customId === "delete") {
      return await interaction.message.delete();
    }
  }
  const row = new MessageActionRow();
  row.addComponents(
    new MessageButton()
      .setCustomId("delete")
      .setLabel("Delete")
      .setStyle(4)
      .setEmoji("🗑️")
  );
  var animalsEmbed = new MessageEmbed()
    .setColor(config.color)
    .setTitle("Animal commands")
    .setDescription(`See the list below for available commands.\n**THE COMMANDS LISTED HERE ARE ONLY USABLE IN <#${config.animal_images_channel}>**`)
      .addFields(
          { name: "Image commands:", value: "```/cat - sends a cat image\n/fox - sends a fox image\n/dog - sends a dog image\n/lizard - sends a lizard image\n/duck - sends a duck image.\n/rpanda - sends a red panda image\n/kangaroo - sends a kangaroo image\n/koala - sends a koala image\n/raccoon - sends a raccoon image```", inline: true },
          { name: "Fact commands:", value: "```/catfact - sends a cat fact\n/dogfact - sends a dog fact\n/birdfact - sends a bird fact\n/pandafact - sends a panda fact\n!/fact - sends a koala fact\n/raccoonfact - sends a raccoon fact```", inline: true }
      )
    .setTimestamp()
    .setFooter({ text: `Version: ${config.version}` });
  await interaction.reply({ embeds: [animalsEmbed], components: [row] });
}

module.exports = {
  data,
  execute,
};
