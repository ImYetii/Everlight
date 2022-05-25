const Discord = require('discord.js')

module.exports = {
    name: 'embed',
    description: 'Test embed command',
    usage: '?embed',
    execute: async(message, args) => {
      const embed = new Discord.MessageEmbed()
      .setColor('#8bde43')
      .setTitle('Embed title')
      .setDescription('Embed description')
      .addFields(
          {name:'Field 1', value:'Field 1 description'},
          {name:'Field 2', value:'Field 2 description'},
          {name:'Field 3', value:'Field 3 description'}
      )
      .setTimestamp()
      .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true}));
      message.channel.send({ embeds: [embed] });
    }
}