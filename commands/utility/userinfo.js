const moment = require('moment');
module.exports = {
  name: 'userinfo',
  description: 'Shows user info',
  execute(message, Discord){
    const target = message.mentions.users.first() || message.author;
    const member = message.guild.members.cache.get(target.id);
    const iurl = "https://cdn.discordapp.com/avatars/" + target.id + "/" + target.avatar + ".png?size=2048";
    const roles = member.roles.cache.map(r => r).join(' ').replace("@everyone", "** **");
    broles = member.roles.cache.map(r => r).join(' ').replace("@everyone", "** **").substring(0, 3900);
    last = broles.lastIndexOf(" ");
    broles = member.roles.cache.map(r => r).join(' ').substring(0, last);

    const Embed = new Discord.MessageEmbed()
    .setColor('#feffff')
    .setAuthor({ name: `${target.tag}`, iconURL: target.displayAvatarURL({dynamic: true}), url: iurl}) 
    .setThumbnail(target.displayAvatarURL({dynamic: true, size: 2048}))
    .addFields(
    { name: "Name",  value: "<@"+`${target.id}`+">", inline: true },
    { name: "ID",  value: `${target.id}`, inline: true },
    { name: '\u200B', value: '\u200B', inline: true },
    { name: "Joined Discord", value: `${moment(target.createdAt).format('MMM Do YYYY, h:mm a ')}\n\`${moment(target.createdAt).fromNow()}\``, inline: true },
    { name: "Joined Server", value: `${moment(member.joinedAt).format('MMM Do YYYY, h:mm a ')}\n\`${moment(member.joinedAt).fromNow()}\``, inline: true },
    { name: "Roles",  value: `${roles}`, inline: false },
    )
    .setFooter({ text: "Timezone GMT " })

    const Embed1 = new Discord.MessageEmbed()
    .setColor('#feffff')
    .setAuthor({ name: `${target.tag}`, iconURL: target.displayAvatarURL({dynamic: true}), url: iurl}) 
    .setThumbnail(target.displayAvatarURL({dynamic: true, size: 2048}))
    .addFields(
    { name: "Name",  value: "<@"+`${target.id}`+">", inline: true },
    { name: "ID",  value: `${target.id}`, inline: true },
    { name: '\u200B', value: '\u200B', inline: true },
    { name: "Joined Discord", value: `${moment(target.createdAt).format('MMM Do YYYY, h:mm a ')}\n\`${moment(target.createdAt).fromNow()}\``, inline: true },
    { name: "Joined Server", value: `${moment(member.joinedAt).format('MMM Do YYYY, h:mm a ')}\n\`${moment(member.joinedAt).fromNow()}\``, inline: true },
    )
    .setFooter({ text: "Timezone GMT " })

    const Embed2 = new Discord.MessageEmbed()
    .setColor('#feffff')
    .setDescription(`**Roles**\n${broles}\nWhy do you have this many roles?`)


    if (roles.length > 1024){
       message.channel.send( {embeds: [Embed1, Embed2]} ) }
    else message.channel.send( {embeds: [Embed]} )
  }
}