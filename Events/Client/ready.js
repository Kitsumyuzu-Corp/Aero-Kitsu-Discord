const { Client, CommandInteraction, ActivityType } = require('discord.js');

module.exports = {
  name: 'ready',
  once: true,

  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */

  execute(interaction, client) {

    console.log(`[!] ${client.user.username} has logged on into Discord.`);

      // Client presence status

      client.user.setPresence({ activities: [{ name: '/help', type: ActivityType.Listening }], status: 'idle' })
    
  },
  
};