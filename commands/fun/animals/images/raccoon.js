const { SlashCommandBuilder } = require("@discordjs/builders");
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("raccoon")
  .setDescription("Sends a random raccoon picture!");
async function execute(client, interaction, subinteraction, config) {
  async function get_raccoon_interaction() {
    const row = new ActionRowBuilder();
    row.addComponents(
      new ButtonBuilder()
        .setCustomId("newraccoon")
        .setLabel("I want another one!")
        .setStyle(1)
        .setEmoji("🦝")
    );
    row.addComponents(
      new ButtonBuilder()
        .setCustomId("delete")
        .setLabel("Delete")
        .setStyle(4)
        .setEmoji("🗑️")
    );
    var response = await config.request("GET", "https://some-random-api.ml/img/raccoon");
    var response = await response.json();
    var raccoon_url = response.link;
    var raccoonEmbed = new EmbedBuilder()
      .setColor(config.color)
      .setTitle("Here's a raccoon!")
      .setImage(raccoon_url)
      .setTimestamp()
      .setFooter({ text: "Powered by some-random-api.ml" });
    return { embeds: [raccoonEmbed], components: [row] };
  }
  if (interaction.isButton()) {
    if (interaction.user.id !== subinteraction.user.id) {
      return;
    }
    if (interaction.customId === "delete") {
      return await interaction.message.delete();
    } else if (interaction.customId === "newraccoon") {
      await interaction.message.edit(await get_raccoon_interaction());
      return await interaction.deferUpdate();
    }
  }
    if (interaction.channel.id !== config.animal_images_channel) {
        
        await interaction.reply({ content: `This command can only be used in <#${config.animal_images_channel}>`, ephemeral: true });
        
      return;
    }
  await interaction.reply(await get_raccoon_interaction());
}

module.exports = {
  data,
  execute,
};
