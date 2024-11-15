import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import type { Command } from "../../types/Command";

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
      .addFields([
        { name: "Username", value: user.username },
        { name: "User ID", value: user.id },
        { name: "Created Account", value: user.createdAt.toLocaleDateString() },
      ])
      .setFooter({ text: "Requested by " + user.tag })
      .setTimestamp();

    if (member) {
      embed.addFields([
        { name: "Nickname", value: member.nickname || "None" },
        { name: "Joined Server", value: member?.joinedAt?.toLocaleDateString() || "Unknown" },
        { name: "Roles", value: member.roles.cache.map(role => role.name).join(", ") },
      ]);
    }

    await interaction.reply({ embeds: [embed] });
  }
}