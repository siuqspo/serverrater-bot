const ms = require('ms')
module.exports = {
  name: 'mute',
  description: 'mutes the user',
  execute(client, message, args, Discord){
    const target = message.mentions.users.first()
    let time = args[1]
    const reason = args.slice(2).join(' ')

    if (target === message.author) return message.channel.send("You can't mute yourself")
    if (!args[0]) return message.channel.send("```mute [user] <time> (reason)```")
    //message.member.timeout(ms(args[1]), reason)
    //message.channel.send(`${target} muted for ${args[1]}`)

  }
}