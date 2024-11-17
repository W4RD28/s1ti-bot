import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../../types/Command";
import db from "../../db/db";
import { UserProfile } from "../../db/schema/user-profile";
import { UserProfileService } from "../../services/user-profile.service";

const userProfileService: UserProfileService = new UserProfileService();

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName("setprofile")
    .setDescription("Set your profile information")
    .addSubcommand(subcommand =>
      subcommand
        .setName("other-names")
        .setDescription("Set your other names")
        .addStringOption(option =>
          option
            .setName("other-names")
            .setDescription("Your other names")
            .setRequired(true)
        ))
    .addSubcommand(subcommand =>
      subcommand.setName("bio")
        .setDescription("Set your bio")
        .addStringOption(option =>
          option
            .setName("bio")
            .setDescription("Your bio")
            .setRequired(true)
        )),
  
  async execute(interaction) {
    const user = interaction.user;
    const member = interaction.guild?.members.cache.get(user.id);
    if (!member) {
      await interaction.reply({ content: "Member not found.", ephemeral: true });
      return;
    }

    const subcommand = interaction.options.getSubcommand();

    if (subcommand === "other-names") {
      const otherNames = interaction.options.getString("other-names");
      if (!otherNames) {
        await interaction.reply({ content: "Please provide your other names.", ephemeral: true });
        return;
      }

      await userProfileService.setOtherNames(user.id, otherNames);

      await interaction.reply({ content: `Your other names have been set to ${otherNames}`, ephemeral: true });
    } else if (subcommand === "bio") {
      const bio = interaction.options.getString("bio");
      if (!bio) {
        await interaction.reply({ content: "Please provide your bio.", ephemeral: true });
        return;
      }

      await userProfileService.setBio(user.id, bio);

      await interaction.reply({ content: `Your bio has been set to ${bio}`, ephemeral: true });
    }
  }
}