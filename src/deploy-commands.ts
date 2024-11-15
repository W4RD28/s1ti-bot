import { REST, Routes } from 'discord.js';
import { SlashCommandBuilder } from 'discord.js';
import commands from './commands';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN as string);
const commandData = Array.from(commands.values()).map(command => command.data.toJSON());

(async () => {
  try {
    console.log(`Started refreshing ${commandData.length} application (/) commands.`);

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID as string,
        process.env.DISCORD_GUILD_ID as string,
      ),
      { body: commandData },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();