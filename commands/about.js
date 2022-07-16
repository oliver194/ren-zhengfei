const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("about")
  .setDescription("Gives information about the bot!");

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
  var aboutEmbed = new MessageEmbed()
    .setColor(config.color)
    .setTitle(`About ${client.user.username}`)
    .setDescription("This bot is a custom bot for the Huaweicord server.")
    .addFields(
          { name: "Source", value: "[GitHub](https://github.com/oliver194/ren-zhengfei)", inline: true },
          { name: "Node.js Version", value: `[Node.js ${process.version}](https://nodejs.org/dist/${process.version})`, inline: true },
          { name: "Contributors", value: "[oliver193](https://github.com/oliver194)\n\[TriDiscord](https://github.com/TriDiscord)\n\[ValerieOSS](https://github.com/ValerieOSS)", inline: true}
    )
    .setTimestamp()
    .setFooter({ text: `Version: ${config.version}` });
  await interaction.reply({ embeds: [aboutEmbed], components: [row] });
}

module.exports = {
  data,
  execute,
};
