module.exports = {
  name: 'sc',
  description: 'sends secret commands that only a few should have access to',
  execute(message, Discord){
    const siuqspo = ['940316053161017394'] 
    const allowedusers = ['724884893435428935', "929723503236763688", "818115160186159114"] // ughmay, raven the rat, Trixie

    const secret = new Discord.MessageEmbed()
    .setColor('#feffff')
    .addFields(
    { name:"Secret", value:"`backstory`, `sendmessage`, `fl`, `invite`, `servers`, `serverleave`"},
	  )
    const Embed = new Discord.MessageEmbed()
    .setColor('#feffff')
    .addFields(
    { name:"Secret", value:"`backstory`, `sendmessage`, `fl`, `invite`, `servers`, `serverleave`"},
	  )
    const Embed1 = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setDescription("How do you know that this exists..?")

    if (siuqspo.includes(message.author.id)) {
      message.channel.send({ embeds: [secret] }); }
    else if (allowedusers.includes(message.author.id)) { 
     message.channel.send({ embeds: [Embed] }); }
    else {
     message.channel.send({ embeds: [Embed1] }); }
  }
}   