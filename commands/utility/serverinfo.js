const moment = require('moment');
module.exports = {
  name: 'serverinfo',
  description: 'shows info about the server',
  execute(message, Discord){
    let guild = message.guild;
    const iurl = "https://cdn.discordapp.com/avatars/" + message.author.id + "/" + message.author.avatar + ".png?size=2048";
    const text = guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').size;
    const voice = guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size;
    const category = guild.channels.cache.filter(c => c.type === 'GUILD_CATEGORY').size;
    
    const ServerInfo = new Discord.MessageEmbed()
    .setColor('#feffff')
    .setAuthor({ name: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true}), url: iurl})
    .setTitle(`${guild.name}`)
    .setThumbnail(guild.iconURL({dynamic: true, size: 2048}))
    .addFields(
        { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true },
        { name: 'Server Created', value: `${moment(guild.createdAt).format('MMM Do YYYY, h:mm a ')}\n\`${moment(guild.createdAt).fromNow()}\``, inline: true },
        { name: '\u200B', value: `<:members:942337632132800583> │ Members \`${guild.memberCount}\`\n<:roles:942338385165565982> │ Roles \`${guild.roles.cache.size}\`\n<:category:942337632304762880> │ Categories \`${category}\`\n<:text:942337631914688584> │ Text Channels \`${text}\`\n<:voice:942337631780478978> │ Voice Channels \`${voice}\`` },
    )
    .setFooter({ text: `Timezone GMT` })
    message.channel.send({ embeds: [ServerInfo] })
  }
} 
