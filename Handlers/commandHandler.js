function loadCommands(client) {

  const ascii = require('ascii-table');
  const fs = require('fs');

  /* -------------------------------------------------- */

  const table = new ascii().setHeading('Commands', 'Status');

  let commandsArray = [];

  /* -------------------------------------------------- */

  const commandsFolder = fs.readdirSync('./Commands');

  for (const folder of commandsFolder) {

    const commandsFile = fs.readdirSync(`./Commands/${folder}`).filter((file) => file.endsWith('.js'));

    for (const file of commandsFile) {

      const commands = require(`../Commands/${folder}/${file}`);

      client.commands.set(commands.data.name, commands);
      commandsArray.push(commands.data.toJSON());

      table.addRow(file, 'Registered');
      continue;

    };

  };

  client.application.commands.set(commands);

  return console.log(table.toString(), '\n[*] Client commands successfully been registered!');

};

module.exports = { loadCommands };