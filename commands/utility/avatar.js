module.exports = {
  name: 'avatar',
  description: 'sends your avatar',
  execute(message, Discord){
    const target = message.mentions.users.first() || message.author;
    const url = "https://cdn.discordapp.com/avatars/" + target.id + "/" + target.avatar + ".png?size=4096";

    const Embed = new Discord.MessageEmbed()
    .setColor('#feffff') //white
    .setTitle(`${target.tag}` + " avatar")
    .setDescription(`${url}`)
    .setImage(target.displayAvatarURL({dymaic: true, size: 4096 , format: "png"}))
    .setFooter({ text: "ID: " + `${target.id}` })

    message.channel.send({ embeds: [Embed] });
  }
}
// need to make it work with id as well