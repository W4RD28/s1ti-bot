import { Collection } from 'discord.js';
import type { Command } from '../types/Command';
import fs from 'fs';
import path from 'path';

const commands = new Collection<string, Command>();
const commandFolders = fs.readdirSync(path.join(__dirname));

for (const folder of commandFolders) {
  const folderPath = path.join(__dirname, folder);

  if (fs.statSync(folderPath).isDirectory()) {
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.command.ts'));

    for (const file of files) {
      const { command } = require(path.join(folderPath, file)) as { command: Command };
      commands.set(command.data.name, command);
    }
  }
}

export default commands;