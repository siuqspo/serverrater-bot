module.exports = {
  name: 'unlock',
  description: 'unlocks the channel',
  execute(message){
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("You can't use that")
    const role = message.guild.roles.cache.find(role => role.name === "@everyone");
    message.channel.permissionOverwrites.edit(role, { 'SEND_MESSAGES': true })
    message.channel.send("<:yes:942368356437196870> **Channel Unlocked**")
  }
}