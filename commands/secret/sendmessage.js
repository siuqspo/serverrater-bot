module.exports = {
  name: 'sendmessage',
  description: 'sends a message that i want',
  execute(message, Discord){
    if (message.author.id !== '940316053161017394') return;
    const messageembed = new Discord.MessageEmbed()
    .setColor('#feffff')
    .setDescription('hello')

    message.channel.send({ embeds: [messageembed]}) 
  }
}