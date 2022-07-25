const { SlashCommandBuilder } = require("@discordjs/builders");
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("perra")
  .setDescription("Perra command");

async function execute(client, interaction, subinteraction, config) {

  const row = new ActionRowBuilder();
  await interaction.reply(`<@907407245149634571> es una perra y pollo sin cerebro\n-------\n**forced to be added by val 😭**`);
}

module.exports = {
  data,
  execute,
};
