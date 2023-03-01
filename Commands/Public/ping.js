const { Client, CommandInteraction, SlashCommandBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Display how fast Aero Kitsu interact.'),

  /**
   * 
   * @param {CommandInteraction} interaction 
   * @param {Client} client 
   */

  async execute(interaction, client) {

    const message = await interaction.deferReply({ fetchReply: true })

    interaction.reply({ content: `:ping_pong: **Pong!**\n> API: \`${client.ws.ping} ms\`\nInternal: \`${ message.createdTimestamp - interaction.createdTimestamp } ms\`` });
  
  },

};