const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const { loadEvents } = require('./Handlers/eventHandler');
const { loadCommands } = require('./Handlers/commandHandler');

const client = new Client({

  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember]
  
});

/* -------------------------------------------------- */

require('dotenv').config();

client.commands = new Collection();
client.config = {

  token: process.env['remote_token'],
  appId: process.env['remote_client_id']
  
};

/* -------------------------------------------------- */

client.login(client.config.token).then(() => {
  loadEvents(client);
  loadCommands(client);
});