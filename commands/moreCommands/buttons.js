const Discord = require('discord.js')

module.exports = {
    name: 'embed',
    description: 'Test embed command',
    usage: '?embed',
    execute: async(message, args) => {
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            // Comming soon
        );
        
        message.channel.send('Test message')
    }
}