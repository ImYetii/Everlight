module.exports = {
    name: 'test',
    description: 'Test command',
    usage: '?test',
    execute: async(message, args) => {
      message.channel.send('Test command')
    }
}