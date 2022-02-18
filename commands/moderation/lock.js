module.exports = {
  name: 'lock',
  description: 'locks the channel',
  execute(message){
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("You can't use that")
    const role = message.guild.roles.cache.find(role => role.name === "@everyone");
    message.channel.permissionOverwrites.edit(role,{ 'SEND_MESSAGES': false })
    message.channel.send("<:no:942368356340756542> **Channel Locked**")
  }
}