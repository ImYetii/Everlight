const Discord = require('discord.js')
  
  module.exports = {
    name: "ban",
    description: "Ban user.",
    usage: "?ban <user> [days(0-7)] [reason]",   
      execute: async(message, args) => {
      message.reply("That command didn't working or isn't programmed. We apologize for the inconvenience.");
      }
  }
