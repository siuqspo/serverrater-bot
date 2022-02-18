module.exports = {
  name: 'fact',
  description: 'useless facts',
  execute(message, Discord){
    const random = ["Roy Cleveland Sullivan was hit by lightning on seven occasions and survived all of them. For this reason, he gained the nickname of \"Human Lightning Rod.\"", "One of the earliest uses of \"OMG\" was in 1917.", "In the 10th century, men in Europe used to wear high heels to make it easier to ride their horses.", "From 1922 till 1954 stop signs used to be yellow.", "Drinking too much water might kill you.", "According to some studies it takes 364 licks to get to the center of a Tootsie Pop", "Tree rings get wider during wet years.", "Hot water freezes faster than cold water.", "The blob of toothpaste that sits on your toothbrush has a name It's called a \"nurdle\" and there was a lawsuit over which toothpaste company had the right to depict it.", "You are 13.8 percent more likely to die on your birthday.", "The King of Hearts is the only king in a deck of cards without a mustache.", "\"Dreamt\" is the only word in the English language that ends with \"mt.\"", "A Greek-Canadian man invented the \"Hawaiian\" pizza.", "If you open your eyes in a pitch-black room, the color you'll see is called \"eigengrau.\"", "Pogonophobia is the fear of beards.", "The average adult spends more time on the toilet than they do exercising.", "A \"jiffy\" is about one trillionth of a second.", "Dragonflies have six legs but can't walk.", "Mulan has the highest kill-count of any Disney character.", "Your body contains about 100,000 miles of blood vessels.", "That small mark you make over a lowercase \"i\" and a lowercase \"j\" is called a \"tittle.\"", "The average American spends about 2.5 days a year looking for lost items.", "The real name of Monopoly mascot Uncle Pennybags is Milburn Pennybags.", "The infinity sign is called a lemniscate.", "There are giant technicolor squirrels in India.", "The inventor of Pringles is buried in a Pringles can.", "Dr. Seuss invented the word \"nerd.\"", "The first email was sent by Ray Tomlinson to himself in 1971.", "Mitochondria is the powerhouse of the cell.", "The Sun is about 400 times bigger than the Moon but also about 400 times farther away from Earth. So they look to be about the same size.", "If you count from 1 to 1,000,000 your lips won't touch until you reach 1,000,000.", "The longest word you can type on the top row of QWERTY is \"typewriter\".", "The \"ueue\" in \"queue\" is silent.", "On average, 100 people choke to death on ballpoint pens every year.", "No word in the English language rhymes with \"MONTH.\"", "A snail can sleep for three years.", "If you yelled for eight years, seven months, and six days, you would have produced enough sound energy to heat one cup of coffee.", "If you passed gas consistently for six years and nine months, you would produce enough gas to create an atomic bomb's energy.", "The shortest war in history lasted for only 38 minutes.", "Glass balls can bounce higher than rubber ones.", "Hippopotamus milk is pink.", "Are you terrified that a duck is watching you? Some people are. That is anatidaephobia.", "There are 31,556,926 seconds in a year.", "Some perfumes actually have whale poo in them.", "Avocados are a fruit, not a vegetable. They're technically considered a single-seeded berry.", "The Eiffel Tower can be 15 cm taller during the summer, due to thermal expansion meaning the iron heats up, the particles gain kinetic energy and take up more space.", "It's illegal to own just one guinea pig in Switzerland. It's considered animal abuse because they're social beings and get lonely.", "The heart of a shrimp is located in its head.", "Baby rabbits are called kits.", "Ketchup was once sold as medicine. The condiment was prescribed and sold to people suffering with indigestion back in 1834.", "There is actually a word for someone giving an opinion on something they know nothing about. An \"ultracrepidarian\" is someone who voices thoughts beyond their expertise.", "Though less common than earthquakes, the moon actually has moonquakes, too.", "Bees can sting other bees.", "Buzz Lightyear's original name is Lunar Larry.", "Australia is wider than the moon.", "It takes a sloth two weeks to digest food.", "The world's longest concert lasted 453 hours.", "More people are killed by vending machines than sharks.", "Strawberries are not actually berries.", "Bananas are actually berries.", "You can eat the labels on fruit. They're totally edible... they just might not taste that good.", "Honey will never go bad.", "If you put grapes in the microwave, they will explode.", "You're taller in the morning than at night.", "Humans are the only animals on earth with chins.", "Blushing is caused by a rush of adrenaline.", "Snails can regenerate their eyes.", "In ancient Egypt, servants were smeared with honey so flies would flock to them instead of the pharaoh.", "Got a song stuck in your head? That’s called an \"earworm.\"", "Salt used to be a currency.", "A dragonfly has a lifespan of only one day.", "It’s impossible to tickle yourself.", "Chalk is edible.", "Peanuts are one of the ingredients of dynamite.", "You spray 2.5 drops of saliva per word.", "If your stomach doesn’t produce a new layer of mucus every two weeks, it will digest itself.", "The average person falls asleep in seven minutes.", "According to research, fans of classical music and those who love heavy metal have shown to have similar personalities.", "Somali pirates have such a hatred for Western culture, that the British Navy uses music from Britney Spears to scare them off.", "Music makes plants grow faster and cows produce more milk.", "Women see more colors than men.", "Mosquitoes are attracted to people who just ate bananas.", "Caterpillars have 12 eyes.","Simply taking just 1 step uses over 200 muscles in the body.", "56 percent of internet users have googled themselves.", "The average person walks the equivalent of 5 laps around the world during their lifetime.", "About 2 percent of the population have green eyes.", "The average person, older than 10 years, have four to six dreams a night.", "There is a greater chance for you to die on the way to get lottery tickets than your chance of winning.", "There’s a trademark on the world’s darkest shade of black, called vantablack.", "The most common password in 2020 is \"123456\", followed by \"123456789\", \"qwerty\" and the famous \"password.\"", "You can’t bring a Furby to the Pentagon.", "The term \"seconds\" derives its name from being the second way to split an hour.", "Americans eat an estimated 13 billion hamburgers each year, which is enough to go around the Earth more than 32 times.", "Rooms with plants have up to 60% less airborne mold and bacteria.", "Six pieces of the standard eight-studded Lego bricks can be combined in 915,103,765 ways.", "The oldest piece of chewing gum is more than 9,000 years old.", "\"Underground\" is the only English word that begins and ends with the letters \"-und.\"", "Venus is the only planet that rotates clockwise.", "In 2003, scientists recovered 15,000-year-old burnt rice grains in Korea. This makes rice the oldest known food that we eat till the present.", "The croissant is actually from Vienna.", "If you force a live sponge through a mesh screen, it will rearrange itself after a few hours.", "If you flip a coin, there is a 51% chance it will land on the side that it started on.", "Reindeer like to eat bananas.", "A piece of paper can be folded no more than 9 times.", "It’s impossible to sneeze with your eyes open.", "Airlines saved $40,000 in 1987 by eliminating one olive from each salad served in first-class.", "Sleeping through summer is called \"estivation.\"", "Grasshoppers have ears in their bellies, They are a thin membrane, like eardrums, called a tympanum and are protected by its wings.", "The weight of all the ants in the world is equal to the weight of all the people in the world.", "You rest your tongue on the roof of your mouth and don't even think about it.", "When you brush your teeth it is the only time you clean your skeleton.", "You don't actually wash your hands. You just watch them wash each other.", "If two people on opposite sides of the world were to drop a piece of bread at the same time, for a brief moment, the Earth would become a sandwich.", "Breakfast is called so because you break the fast from when you were asleep.", "Nothing is ever on fire. Fire is actually on things.", "Being antisocial means you are hostile or harmful to an organized society. Lacking the capacity for social interaction is called being asocial.", "You don't actually bite down. You bite up because of your lower jaw.", "Most cats have lactose intolerance, and drinking milk is really bad for them.", "Cats, dogs and other animals cannot see directly below their faces. Because their snouts get in their way."]

    const ans = random[Math.floor(Math.random() * random.length)];

    const Embed = new Discord.MessageEmbed()
    .setColor('#feffff')
    .setDescription(`${ans}`)

    message.channel.send({ embeds: [Embed] })
  }
}