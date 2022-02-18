module.exports = {
  name: 'backstory',
  description: 'sends the bots backstory in dms',
  execute(message, Discord){
    const Embed = new Discord.MessageEmbed()
    .setColor('#feffff') //white
    .setDescription('Eek I havent made it yet')

    
    message.channel.send({ embeds: [Embed] }).catch(error => message.channel.send("I can't message you."));
  }
}