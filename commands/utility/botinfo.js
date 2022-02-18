const moment = require('moment');
module.exports = {
  name: 'botinfo',
  description: 'Shows Bot Statistics',
  execute(client, message, Discord, prefix){
    const servers = message.client.guilds.cache.size
    let totalSeconds = (client.uptime / 1000);
    let d = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let h = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let m = Math.floor(totalSeconds / 60);
    let s = Math.floor(totalSeconds % 60);
    const time = `\`${d}d ${h}h ${m}m ${s}s ago\``;

    const Embed = new Discord.MessageEmbed()
    .setColor('#feffff')
    .addFields(
		{ name: "Server count", value: `\`${servers}\`` },
    { name : "Prefix", value: `\`${prefix}\``}, 
		{ name: "Last restart", value: (`\`${time}\``) },
    { name: "Created", value: `\`Jan 17 2022\n${moment('20220117' , 'YYYYMMDD').fromNow()}\``}, 
   // { name: "Alive", value: `\`For ${moment(`20220117`, `YYYYMMDD`).fromNow().slice(0, -4)}\`` },
    { name: "Birthday", value: `\`In ${moment("20230117", "YYYYMMDD").fromNow().substring(3, 10)}\``}
	)
    .setTimestamp()

    message.channel.send({ embeds: [Embed] });
  }
}