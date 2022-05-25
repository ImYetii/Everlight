const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: 'All Everlight commands',
    usage: '?help',
    execute: async(message, args) => {
      const embed = new Discord.MessageEmbed()
      .setColor('#8bde43')
      .setTitle('Commands list')
      .setDescription('All Everlight commands')
      .addFields(
          {name:'Server management', value:'`?ban <user> <reason>` - Ban user  `?kick <user>` - Kick user'},
          {name:'4fun', value:'Comming soon'},
          {name:'Informations', value:'`?help` - View commands list  `?info` - Informations of Everlight'},
          {name:'Test commands', value:'`?test` - Test Discord message  `?embed` - Test embed'}
      )
      .setTimestamp()
      message.channel.send({ embeds: [embed] });
    }
}