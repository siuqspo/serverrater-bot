module.exports = {
  name: 'joke',
  description: 'dad jokes',
  execute(message, Discord){
    const random = 
      [
        "What do you call a pile of cat?\n||A meowtain.||",
        "The invention of the shovel was...\n||Groundbreaking.||",
        "Why do seals swim in salt water?\n||Because pepper water makes them sneeze.||",
        "How do you fix a broken instrument?\n||With a tuba glue.||",
        "Why don't they play poker in the jungle?\n||Too many cheet-ahs.||",
        "What car does an egg drive?\n||A Yolks-wagen.||",
        "What do you call a fish without eyes?\n||Fsh.||",
        "What is an astronaut's favorite part on a computer?\n||The space bar.||",
        "What do polar bears eat for lunch?\n||Ice berg-ers.||",
        "What do you call a bagel that can fly?\n||A plain bagel.||",
        "What do you call a group of dinosaurs singing?\n||A tyranno-chorus.||",
        "Why was the students report card wet?\n||Because it was below c level...||",
        "What's green, fuzzy, and if it falls out of a tree will kill you?\n||A pool table.||",
        "What do you call an alligator in a vest?\n||An in-vest-igator.||",
        "What do you call two pigs playing table tennis?\n||Pink-Pong.||",
        "Which tree do math teachers love?\n||Geome-tree...||",
        "What kind of noise does a witch’s vehicle make?\n||Brrrroooom, brrroooom.||",
        "Why are elevator jokes so classic and good?\n||They work on many levels.||",
        "What do you call it when a group of apes starts a company?\n||Monkey business.||",
        "What did the police officer say to his belly-button?\n||You’re under a vest.||",
        "What would the Terminator be called in his retirement?\n||The Exterminator.||",
        "How do celebrities stay cool?\n||They have many fans.||",
        "It takes guts to be an organ donor.",
        "Why did the orange lose the race?\n||It ran out of juice.||",
        "What's the best thing about Switzerland?\n||I don't know, but the flag is a big plus.||",
        "What did the sink tell the toilet?\n||You look flushed!||",
        "Where do boats go when they're sick?\n||To the dock.||",
        "Can February March?\n||No, but April May.||",
        "What do you call a pencil with two erasers?\n||Pointless.||",
        "Did you hear the rumor about butter?\n||Well, I'm not going to go spreading it.||",
        "How do you deal with a fear of speed bumps?\n||You slowly get over it.||",
        "I'm reading an anti-gravity book.\n||I can't put it down.||",
        "Why is Peter Pan always flying?\n||Because he Neverlands.||",
        "Why was the broom late to class?\n||It over-swept.||",
        "It over-swept.\n||With ten-tickles.||",
        "What type of tree fits in your hand?\n||A palm tree.||"
      ];
    const ans = random[Math.floor(Math.random() * random.length)];

    const Embed = new Discord.MessageEmbed()
    .setColor('#feffff')
    .setDescription(`${ans} <:pandoralaugh:941702715984187412>`)

    message.channel.send({ embeds: [Embed] })
    
  }
}