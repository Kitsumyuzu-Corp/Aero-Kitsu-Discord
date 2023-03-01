const { CommandInteraction } = require('discord.js');

module.exports = {
  name: 'interactionCreate',

  execute(interaction, client) {

    if (interaction.isChatInputCommand()) {

      const command = client.commands.get(interaction.commandName);

      if (!command) {

        interaction.reply({

          content: '> Oops! it looks like that this commands is already outdated. Please try again!',
          ephemeral: true
        
        });
      
      };

      command.execute(interaction, client);
      
    } else if (interaction.isButton()) {

      const role = interaction.guild.roles.cache.get('1077245914990784602')
      return interaction.member.roles.add(role).then((member) =>
        interaction.reply({

          content: `${role} has been added into your account!`,
          ephemeral: true,
          
        }));
      
    } else {
      
      return;
      
    }
    
  },
  
};