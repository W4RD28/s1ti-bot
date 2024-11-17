import { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandBuilder, type SlashCommandSubcommandsOnlyBuilder } from "discord.js";

export interface Command {
  data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup"> 
  | SlashCommandSubcommandsOnlyBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}