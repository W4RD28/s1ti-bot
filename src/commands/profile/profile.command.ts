import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import type { Command } from "../../types/Command";
import { UserProfileService } from "../../services/user-profile.service";

const userProfileService: UserProfileService = new UserProfileService();

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Displays your user profile in an embedded format."),
  
  async execute(interaction) {
    const user = interaction.user;
    const member = interaction.guild?.members.cache.get(user.id);

    const embed = new EmbedBuilder()
      .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
      .setTitle("User Profile")
      .setColor("#29ff52")
      .setFooter({ text: "Requested by " + user.tag })
      .setTimestamp();

    if (member) {
      const userProfile = await userProfileService.getUserProfile(user.id);

      embed.addFields([
        { name: "Server Nickname", value: member.nickname || "None" },
        { name: "Joined Server", value: member?.joinedAt?.toLocaleDateString() || "Unknown" },
        { name: "Roles", value: member.roles.cache.map(role => role.name).join(", ") },
      ]);
    }

    await interaction.reply({ embeds: [embed] });
  }
}