import { SlashCommandBuilder } from "discord.js";

import type { Command } from "../../types/Command";

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("One of the health commands. Replies with a simple Pong!"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
}