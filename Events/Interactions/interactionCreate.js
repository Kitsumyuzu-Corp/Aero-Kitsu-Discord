const { Client, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {

  name: 'interactionCreate',

  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */

  execute(interaction, client) {

    if (interaction.isChatInputCommand()) {

      const command = client.commands.get(interaction.commandName);

      if (!command) {

        interaction.reply({ content: '> :exclamation: Oops! It looks like that this commands is already outdated. Please try again!', ephemeral: true });

      };

      command.execute(interaction, client);

    } else if (interaction.isButton()) {

      const claim_role = interaction.guild.roles.cache.get('1077245914990784602');

      return interaction.member.roles.add(claim_role).then((member) => {

        const added_embed = new EmbedBuilder()

        .setColor('#2c2f33')
        .setDescription(`:white_check_mark: added roles \`${claim_role}\``)

        interaction.reply({
          
          embeds: ([added_embed]),
          ephemeral: true

        });

      });

    } else {

      return;

    };

  },

};