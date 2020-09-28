const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '/'

client.once('ready', () => {
    console.log('Saitsu is online!')
    client.user.setActivity("With Erge's emotions")
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'julian') {
        message.channel.send('<@262088319507103744> suicidate mogolico de mierda');
    }
    if (command === 'dragoon') {
        message.channel.send('<@348608997038882828> sos re putin vos amigo');
    }
    if (command === 'p4g') {
        message.channel.send('P4G Modding Server commands: chair, hate, kechi, erge, kill, mudkip, mudkip1, saitsu, naoto, kiwi, help, tekka');
    }
    if (command === 'sloserver') {
        message.channel.send("SLOPlay's Modding Server commands: hate, kill, saitsu, naoto, kiwi, ultiam, joke");
    }
    if (command === 'naoto') {
        message.channel.send('<a:naotodance:746218185019359332>');
    }
    if (command === 'kiwi') {
        message.channel.send('<a:spinning_kiwi:758896501346402324>');
    }
    if (command === 'online') {
        message.channel.send("Mods don't work online, you can't use mods with the normal version of the game, so any attempt of using mods will result in you getting disconnected. However, here are some alternatives: 1) Use a cloud service like Parsec to play with your friends. 2) Use the modded exe, both you and your friend will need to use it, otherwise you'll both get disconnected.");
    }
    if (command === 'console') {
        message.channel.send("Listen, most modding communities don't support console modding, not only because it's impractical, but also because you actually void your warranty for the console due to you modifying it. Lastly, stuff like jailbreak CAN damage your console. So, please don't ask for mods on console.");
    }
    if (command === 'lucas') {
        message.channel.send('<@219590638276968449> RESPONDÉ LOS DMS PEDAZO DE BASURA');
    }
    if (command === 'mudkip1') {
        message.channel.send("He's fucking braindead man");
    }
    if (command === 'mudkip') {
        message.channel.send('simp');
    }
    if (command === 'saitsu') {
        message.channel.send('Nagito Komaeda stan');
    }
    if (command === 'kechi') {
        message.channel.send('weeb');
    }
    if (command === 'kill') {
        message.channel.send('https://www.youtube.com/watch?v=1JR95qMfo9A');
    }
    if (command === 'ultiam') {
        message.channel.send('https://media.discordapp.net/attachments/731593314897494096/734451592593670234/unknown.png?width=1442&height=624');
    }
    if (command === 'hate') {
        message.channel.send('I hate it here, man.');
    }
    if (command === 'chair') {
        message.channel.send('Shut the fuck up before I shove a folding chair up your ass, Erge <:GUN:749040707225780416>');
    }
    if (command === 'erge') {
        message.channel.send('Erge is a little bitch');
    }
    if (command === 'tekka') {
        message.channel.send('OwO');
    }
    if (command === 'help') {
        message.channel.send('https://cdn.discordapp.com/attachments/711289885071507519/758940869708873758/prerequisites.mp4');
    }
    if (command === 'joke') {
        message.channel.send("**yeah the fucking joke is that it's spelled wrong congratulations.**");
    }
    if (message.content === '/erge') {
        message.react('749040707225780416');
    }
    if (command === 'unamused') {
        message.channel.send('https://cdn.discordapp.com/attachments/339880946826346498/662847082734026753/20200103_233707.png')
    }
    if (command === 'escribialtare') {
        setInterval(() => {
            message.channel.send('<@219590638276968449> Ponete a escribir cara de pija.');
        }, 14400000);
    }
    if (command === 'stop') {
        if (message.author.id !== '209823773833166850') {
            return message.channel.send(`You cannot use this command!`)
        }
        process.exit();
    }
    if (command === 'cringy') {
        if (message.author.id !== '209823773833166850') {
            return message.channel.send(`You cannot use this command!`)
        }
        setInterval(() => {
            message.channel.send('I see this place is cringy as always.');
        }, 21600000);
    }
});

client.login(process.env.token);