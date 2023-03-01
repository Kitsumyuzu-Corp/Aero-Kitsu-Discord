const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

module.exports = {
  name: 'ready',
  once: true,

  execute(client) {

    console.log(`[!] ${client.user.username} has logged on into Discord.`);

    client.user.setPresence({
      activities: [{ name: '/help', type: ActivityType.Listening }],
      status: 'idle'
    })
    
  }
  
}