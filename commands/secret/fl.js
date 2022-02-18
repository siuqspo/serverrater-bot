module.exports = {
  name: 'fl',
  description: 'sends my friends list',
  execute(message){
    if (message.author.id !== '940316053161017394') return;

    message.channel.send("```ughmay<3#7061 : 724884893435428935\nraven the rat#6654 : 929723503236763688\n•Trixie•#2621 : 818115160186159114\nErica<3#0861 : 689879457355399169\nShiroSkcahツ#8240 : 330791585912455168```")
  }
}