module.exports = {
  name: 'delete',
  description: 'deletes desired amount of messages',
  execute(message, args, Discord){

    const Embed = new Discord.MessageEmbed()
    .setColor('#ff0000') //red
    .setDescription("You cannot tell me what to do.")

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({ embeds: [Embed] })
    .then(message => { setTimeout(() => message.delete(), 5000) });

    const Embed2 = new Discord.MessageEmbed()
    .setColor('#ff0000') //red
    .setDescription("How many messages?")

    if (!args[0]) return message.channel.send({ embeds: [Embed2] })
    .then(message => { setTimeout(() => message.delete(), 5000) })

    const Embed3 = new Discord.MessageEmbed()
    .setColor('#ff0000') //red
    .setDescription("I'm afraid you'll have to delete it yourself.")

    if (args[0] < 2) return message.channel.send({ embeds: [Embed3] })
    .then(message => { setTimeout(() => message.delete(), 5000) })

    const Embed4 = new Discord.MessageEmbed()
    .setColor('#ff0000') //red
    .setDescription("I will not delete more than `100` messages.")
    
    if (args[0] >= 100) return message.channel.send({ embeds: [Embed4] })
    .then(message => { setTimeout(() => message.delete(), 5000) })

    const Embed5 = new Discord.MessageEmbed()
    .setColor('#feffff') //white
    .setDescription(`The \`${args[0]}\` messages are not here anymore.`)
    message.channel.bulkDelete(parseInt(args[0])+1).then(() => {
    message.channel.send({ embeds: [Embed5] })
    .then(message => { setTimeout(() => message.delete(), 5000) })
    .catch((error) => { message.channel.send("I won't delete messages older than `14` days") })
  })
}
}