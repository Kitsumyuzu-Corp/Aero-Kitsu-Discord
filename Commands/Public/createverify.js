const { Client, CommandInteraction, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()
  .setName('createverify')
  .setDescription('Create a verification channel in your server')
  
  .addChannelOption((option) =>

    option.setName('channel')
    .setDescription('Send verification messages into channel')
    .setRequired(true)

  )
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

  /**
   * @param {CommandInteraction} interaction 
   * @param {Client} client 
   */
  
  async execute(interaction, client) {

    const verification_embed = new EmbedBuilder()

    .setColor('#00ff00')
    .setTitle(`:white_check_mark: ${interaction.guild.name}'s Verification`)
    .setDescription(`\`\`\`Welcome to our community server, before you can start communicate with the other members. You will be needed to verify yourself as Humans by clicking verification button down below. Have a greate day!\`\`\``)
    .setFooter('Invite your friends: https://discord.gg/CyG7rH5xS5')

    const verification_channel = channel.send({

      embeds: ([verification_embed]),
      components: [

        new ActionRowBuilder()
        .setComponents(
          new ButtonBuilder()
          .setStyle(ButtonStyle.Primary)
          .setCustomId('verification')
          .setEmoji(':white_check_mark:')
          .setLabel('Verification'),
        ),
        
      ],

    });

    if (!verification_channel) {

      interaction.reply({ content: '> :exclamation: Oops! There was an error while sending this content. Please try again!', ephemeral: true });

    } else {

      interaction.reply({ content: '> :white_check_mark: Your verification system has been added & sended!', ephemeral: true })

    };
    
  },

};