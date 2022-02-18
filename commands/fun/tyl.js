module.exports = {
  name: 'tyl',
  description: 'choose 1-100 to test your luck',
  execute(message, args, Discord){
    const rnumber = Math.floor(Math.random() * 100) + 1;

    const fail = new Discord.MessageEmbed()
    .setColor('#ff0000') //red
    .setDescription(`Unlucky, the number was \`${rnumber}\``)
    const win = new Discord.MessageEmbed()
    .setColor('#feffff') //white
    .setDescription(`Correct the number was \`${rnumber}\`!`)
    const no = new Discord.MessageEmbed()
    .setColor('#ff0000') //red
    .setDescription(`Choose between \`1-100\`.`)
    

    if (!args[0] || args > 100 || args < 1) {
      message.channel.send({ embeds: [no] })
    }

    else if (args == rnumber) { 
      message.channel.send({ embeds: [win] }) 
    }

    else if (args !== rnumber){
      message.channel.send({ embeds: [fail] })
    }

    
  }
}