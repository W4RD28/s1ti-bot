import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

import type { Command } from "../../types/Command";

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("One of the health commands. Replies with Test!"),
  async execute(interaction) {
    // await interaction.reply("Test!");

    const embed = new EmbedBuilder()
      .setTitle("Bot Test")
      .setDescription("Test!")
      .setColor("#29ff52")
      .setFooter({ text: "Tested by " + interaction.user.tag })
      .setTimestamp();
    
    await interaction.reply({ embeds: [embed] });
  }
}