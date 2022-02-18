const { MessageActionRow, MessageButton } = require(`discord.js`)
module.exports = {
  name: 'help',
  description: 'shows all of the avaible commands',
  execute(message, Discord){

    const linkRow = new MessageActionRow()
			.addComponents(
				new MessageButton()
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=940331813317001236&permissions=1516123451383&scope=bot%20applications.commands`)
					.setLabel('Invite')
					.setStyle('LINK')
			)
    const Embed = new Discord.MessageEmbed()
    .setColor('#feffff')
    .addFields(
    { name:"<:utility:943175437612351558> │ Utility" , value:"`serverinfo`, `whois`, `botinfo`, `avatar`" },
    { name:"<:moderation:943175437746569246> │ Moderation" , value:"`mute`, `delete`, `lock`, `unlock`" },
    { name:"<:fun:943175437922762822> │ Fun" , value:"`ask`, `fact`, `joke`, `riddle`, `tyl`" },
	  )
    .setFooter({ text: "I was made 2022 Jan 17" })

    
    message.channel.send({ embeds: [Embed], components: [linkRow] });
  }
}