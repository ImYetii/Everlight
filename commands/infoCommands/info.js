const Discord = require('discord.js')

module.exports = {
    name: 'info',
    description: 'Informations of Everlight',
    usage: '?info',
    execute: async(message, args) => {
      const embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('Informations of Everlight')
      .setDescription('Everlight Developer Preview [V0.3.9 Indev] Copyright Mipp & Mipp+ Developers 2021-2022. All rights reserved.')
      .addFields(
          {name:'How I enter commands?', value:"Command prefix: ?; To view the commands list, enter: `?help`"},
          {name:'Will Everlight commands harm my server?', value:"No. Everlight commands will not harm your server."}
      )
      .setTimestamp()
      .setFooter('*WARNING!: Everlight commands may be unstable or not working because the entire bot is still developing.*')

      const buttons = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setLabel('Invite bot to your server')
        .setStyle('LINK')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=976558024997089361&permissions=8&scope=bot')
    );

    message.channel.send({ embeds: [embed], components: [buttons] });
    }
}