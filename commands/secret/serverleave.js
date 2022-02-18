module.exports = {
  name: 'serverleave',
  description: 'leaves the server',
  execute(client, message, args){ 
    if (!args[0]) return
    if (message.author.id !== '940316053161017394') return;
    const guild = client.guilds.cache.get(args[0])
    
    try{
    guild.leave().then(message.channel.send(`Left \`${guild.name}\``))
    } catch (error) {message.channel.send(`${error}`)}
  }
}