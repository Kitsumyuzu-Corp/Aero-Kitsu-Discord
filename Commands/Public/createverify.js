const { EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('createverify')
  .setDescription('Set verification channel in your server.')
  .addChannelOption((option) =>
    option.setName('channel')
    .setDescription('Send a verification embed into channel.')
    .setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.Manage_Channel),

  async execute(interaction) {

    const channel = interaction.options.getChannel('channel');
    const verifyEmbed = new EmbedBuilder()

    .setTitle('Welcome to World Govy Community')
    .setURL('https://discord.gg/CyG7rH5xS5')
    .setColor('#2c2f33')
    .setDescription('```Hello discord users, welcome to our community server. Before you can start sending messages and communicate with the other member in our server. Please read the following rules and verify yourself as a humanoid. Thanks you```')

    let send_channel = channel.send({
      embeds: ([verifyEmbed]),
      components: [
        new ActionRowBuilder().setComponents(
          new ButtonBuilder().setCustomId('verify').setLabel('Verify').setStyle(ButtonStyle.Success),
        ),
      ],
    });

    if (!send_channel) {

      return interaction.reply({ content: 'There was an error! Please try again later.', ephemeral: true });
      
    } else {

      return interaction.reply({ content: 'Verification channel has successfully set!', ephemeral: true });
      
    };
    
  }
  
}