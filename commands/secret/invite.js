module.exports = {
  name: 'invite',
  description: 'usage invite <guildid>',
  execute(client, message, args, Discord){ 
    const siuqspo = ['940316053161017394']
    if (!args[0]) return

    if (siuqspo.includes(message.author.id))
      {
       let guild = client.guilds.cache.get(args[0]);
       let channel = guild.channels.cache.filter(ch => ch.type === "GUILD_TEXT");
        channel
        .first()
        .createInvite({ maxUses: 1, maxAge: 0 })
        .then(invite => message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setColor('#feffff')
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        { name: "Server Name",  value: `\*${guild.name}\*`, inline: true },
        { name: "Server ID",  value: `\`${guild.id}\``, inline: true },
        { name: "Owner ID",  value: `\`${guild.ownerId}\``, inline: true },
        { name: "Member Count",  value: `\`${guild.memberCount}\`` },
        { name: "Invite",  value: `${invite.url}` },
      )
      ]}
      ) ).catch (error => {message.channel.send(`${error}`)})
    }
  }
}