module.exports = {
  name: 'servers',
  description: 'sends all the servers',
  execute(client, message){
    const siuqspo = ['940316053161017394'] 
    let re = /,/gi
    let random = client.guilds.cache.map(g => `**Name:** \`${g.name}\` **ID:** \`${g.id}\` **Owner:** \`${g.ownerId}\`\n`).toString()
    let servers = random.replace(re, '')

    if (siuqspo.includes(message.author.id)){
      message.channel.send(`${servers}`) }
  }
}