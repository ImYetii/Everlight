const Discord = require('discord.js')

module.exports = {
    name: 'youarestupid',
    description: 'Send: YOU ARE STUPID!!!',
    usage: '?youarestupid',
    execute: async(message, args) => {
      const embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('YOU ARE STUPID!')
      .setDescription('__**YOU ARE STUPID!!!**__\n\n\n\n\n')
      .setTimestamp()
      .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true}));

      message.channel.send({ embeds: [embed] });
    }
}