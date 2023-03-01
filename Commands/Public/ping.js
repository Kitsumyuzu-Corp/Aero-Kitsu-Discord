const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Display client lantencies'),

  execute(interaction, client) {

    interaction.reply({ content: `:ping_pong: **Pong!**\n> WebSocket: \`${client.ws.ping} ms\`` });
  
  }

}