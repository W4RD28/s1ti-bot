import { Client, Events, GatewayIntentBits } from "discord.js";
import commands from "./commands";

const client = new Client(
  {
    intents: GatewayIntentBits.Guilds,
  }
)

client.once('ready', () => {
  console.log("starting...");
  console.log(`Logged in as ${client.user?.tag}`);
  console.log(`Started at ${new Date().toISOString()}`);
  console.log("--------------------------------------------------");
  console.log();
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = commands.get(interaction.commandName);
  if (!command) return;

  console.log(`Command ${interaction.commandName} was executed by ${interaction.user.tag}`);
  try {
    if (interaction.isChatInputCommand()) {
      await command.execute(interaction);
      console.log(`Command ${interaction.commandName} was executed successfully!`);
    }
  } catch (error) {
    console.error(`Error while executing command ${interaction.commandName}: ${error}`);
    if (!interaction.replied && !interaction.deferred)
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
  console.log("--------------------------------------------------");
  console.log();
})

client.login(process.env.DISCORD_TOKEN);
export { client };