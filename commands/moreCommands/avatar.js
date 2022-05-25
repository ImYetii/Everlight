const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    description: "View someone avatar",
    usage: '?avatar (user)',
    execute: async(message, args) => {
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;

        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Avatar')
        .setDescription(`${user}'s avatar`)
        .setImage(user.avatarURL({ dynamic: true, size: 512 }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    }
}