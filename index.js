const Discord = require('discord.js');
const keepAlive = require('./server.js');
keepAlive();
const dotenv = require('dotenv');
const fs = require('fs');
const prefix = 'p';
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
});
client.commands = new Discord.Collection();

client.on('ready', () => {
  console.log('Pandora is being used by ' + `${client.users.cache.size}` + ' people in ' + `${client.guilds.cache.size}` + ' servers' );
  setInterval(() => {
    client.user.setActivity(`${client.guilds.cache.size}` + ' servers' + ' | phelp', { type: "WATCHING"})} , 6000);
        });

const commandFiles = fs.readdirSync('./commands');
for (const folder of commandFiles) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command); }
}

client.on('error', message => {message.channel.send(`${error}`).substring(0, 1500)})

client.on('messageCreate', message => {
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES")) return message.author.send("You need to enable the `Send Messages` permission in that channel").catch(error => {return});
  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // FUN COMMANDS
  if (command == 'ask' || command == '8b' || command == '8ball'){
    client.commands.get('ask').execute(message, args, Discord); }
  else if (command == 'fact'){
    client.commands.get('fact').execute(message, Discord); }
  else if (command == 'joke'){
    client.commands.get('joke').execute(message, Discord); }
  else if (command == 'riddle' || command == 'riddles'){ 
    client.commands.get('riddle').execute(client, message, args, Discord); }
  else if (command == 'tyl'){ //test your luck
    client.commands.get('tyl').execute(message, args, Discord); }

  // LEVEL COMMANDS
 // else if (command == 'leaderboard' || command == 'lb'){
   // client.commands.get('leaderboard').execute(Levels, client, message, args, Discord); }
 // else if (command == 'rank' || command == 'level'){
   // client.commands.get('rank').execute(Levels, client, message, args, Discord); }

  // MODERATION COMMANDS
  else if (command == 'delete' || command == 'del' || command == 'd'){
    client.commands.get('delete').execute(message, args, Discord); }
  else if (command == 'lock'){
    client.commands.get('lock').execute(message); }
  else if (command == 'mute' || command == 'timeout' || command == 'm'){
    client.commands.get('mute').execute(client, message, args, Discord); }
  else if (command == 'unlock'){
    client.commands.get('unlock').execute(message); }

  // SECRET COMMANDS
  else if (command == 'backstory'){
    client.commands.get('backstory').execute(message, Discord); }
  else if (command == 'fl'){ //friends list
    client.commands.get('fl').execute(message); }
  else if (command == 'sc' || command == 'secret'){ //secret commands
    client.commands.get('sc').execute(message, Discord); }
  else if (command == 'invite'){
    client.commands.get('invite').execute(client, message, args, Discord); }
  else if (command == 'sendmessage'){
    client.commands.get('sendmessage').execute(message, Discord); }
  else if (command == 'serverleave'){
    client.commands.get('serverleave').execute(client, message, args); }
  else if (command == 'servers'){
    client.commands.get('servers').execute(client, message, args); }

  // UTILITY COMMANDS
  else if (command == 'avatar' || command == 'av'){
    client.commands.get('avatar').execute(message, Discord); }
  else if (command == 'botinfo'){
    client.commands.get('botinfo').execute(client, message, Discord, prefix); }
  else if (command == 'help' || command == 'commands'){ 
    client.commands.get('help').execute(message, Discord); }
  else if (command == 'serverinfo'){
    client.commands.get('serverinfo').execute(message, Discord); }
  else if (command == 'userinfo'|| command == 'whois'){
    client.commands.get('userinfo').execute(message, Discord); }
});

const { MessageActionRow, MessageButton } = require(`discord.js`)
const linkRow = new MessageActionRow()
			.addComponents(
				new MessageButton()
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=940331813317001236&permissions=1516123451383&scope=bot%20applications.commands`)
					.setLabel('Invite')
					.setStyle('LINK')
			)
const prefixembed = new Discord.MessageEmbed()
    .setColor('#feffff')
    .setDescription('My default prefix is ' + `\`${prefix}\`.`)

client.on('messageCreate', (message) => {
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES")) return;
	if (message.author.bot) return;
	if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return;
  if (message.content.startsWith(prefix)) return;
	if (message.mentions.has(client.user.id)) {
    message.channel.send({ embeds: [prefixembed], components: [linkRow] });
  }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().includes("uwu")){
    message.delete() 
    message.member.timeout(60000, 'They said uwu, their existence does not matter.').catch(error =>
    message.author.send(
      "I would time you out, but I cannot. Anyways " + `${message.author.username}` + " stop saying \`uwu\`.") ).catch(error => message.channel.send("I would time you out, but I cannot. Anyways " + `${message.author.username}` + " stop saying \`uwu\`. ||Imagine closing your dms though||")) }} );

dotenv.config();
client.login(process.env.token);