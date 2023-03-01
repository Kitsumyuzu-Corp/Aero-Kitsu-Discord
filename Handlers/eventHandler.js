function loadEvents(client) {

  const ascii = require('ascii-table');
  const fs = require('fs');

  /* -------------------------------------------------- */

  const table = new ascii().setHeading('Events', 'Status');

  /* -------------------------------------------------- */

  const eventsFolder = fs.readdirSync('./Events');

  for (const folder of eventsFolder) {

    const eventsFile = fs.readdirSync(`./Events/${folder}`).filter((file) => file.endsWith('.js'));

    for (const file of eventsFile) {

      const event = require(`../Events/${folder}/${file}`);

      if (event.rest) {

        if (event.once)
        client.rest.once(event.name, (...args) =>
        event.execute(...args, client));
        
        else
        client.rest.on(event.name, (...args)=>
        event.execute(...args, client));

      } else {

        if (event.once)
        client.once(event.name, (...args) => event.execute(...args, client));
        else
        client.on(event.name, (...args) => event.execute(...args, client));

      };

      table.addRow(file, 'Registered');
      continue;

    };

  };

  return console.log(table.toString(), '\n[*] Client events successfully been registered!');
}

module.exports = { loadEvents };