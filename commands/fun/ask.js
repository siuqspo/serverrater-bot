module.exports = {
  name: 'ask',
  description: 'simple 8b',
  execute(message, args, Discord){
    const random = ["No.", "Yes.", "If it ever happens, I'll have to revert it.", "I'm afraid not. I had better odds of opening the seal in Elior Forest. "];
    const rwans = ["Ask someone else.", "Don't ask me.", "Why would you ask me that?", "You might want to ask Satella.", "If I knew that, I would still be alive."]

    const ans = random[Math.floor(Math.random() * random.length)];
    const wans = rwans[Math.floor(Math.random() * rwans.length)];

    const Embed = new Discord.MessageEmbed()
    .setColor('#ff0000') //red
    .setDescription("Where's the question?")
    const Embed1 = new Discord.MessageEmbed()
    .setColor('#feffff') //white
    .setDescription(`Question by ${message.author}: ${args.join(' ')} \n**> ${ans} <:pandoralaugh:941702715984187412>**`)
    const Embed2 = new Discord.MessageEmbed()
    .setColor('#feffff') //white
    .setDescription(`Question by ${message.author}: ${args.join(' ')} \n**> ${wans} <:pandoralaugh:941702715984187412>**`)
    const Embed3 = new Discord.MessageEmbed()
    .setColor('#ff0000') //red
    .setDescription("Is that even a question?")
    const life = new Discord.MessageEmbed()
    .setColor('#feffff')
    .setDescription(`Question by ${message.author}: ${args.join(' ')} \n**> I'm sorry, I don't know, life is too confusing even for me :(**`)

    if (!args[0]){
      message.channel.send({ embeds: [Embed] })
      .then(message => { setTimeout(() => message.delete(), 5000) })
      .catch (error => {message.author.send(`${error}`)}) }
      
    else if (args.includes("life")){
      message.channel.send({ embeds: [life] }) }
    
    else if (args.includes("who") || args.includes("what") || args.includes("which") || args.includes("where") || args.includes("why") || args.includes("when") || args.includes("how") || args.includes("whoose")) {
      message.channel.send({ embeds: [Embed2] }); }

    else if (args.includes("will") || args.includes("am") || args.includes("is") || args.includes("are") || args.includes("do") || args.includes("does")) {
      message.channel.send({ embeds: [Embed1] });}

    else message.channel.send({ embeds: [Embed3] })
    .then(message => { setTimeout(() => message.delete(), 5000) }) 
 }
}
