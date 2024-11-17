import { SlashCommandBuilder } from 'discord.js';
import type { Command } from '../../types/Command';

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Displays a list of all available commands.'),

  async execute(interaction) {
    await interaction.reply('This is a help command.');
  }
}