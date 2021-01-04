const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '/'

var girls = ['https://static.wikia.nocookie.net/megamitensei/images/a/af/P5_Makoto_Nijima.png/revision/latest/scale-to-width-down/57?cb=20160511211058',
                    'https://static.wikia.nocookie.net/megamitensei/images/b/be/An_takamaki.png/revision/latest/scale-to-width-down/68?cb=20170426203909',
                    'https://static.wikia.nocookie.net/megamitensei/images/9/95/P5_Futaba_Sakura.png/revision/latest/scale-to-width-down/72?cb=20160517013502',
                    'https://static.wikia.nocookie.net/megamitensei/images/7/77/P5_Haru_Okumura.png/revision/latest/scale-to-width-down/52?cb=20191006133127',
                    'https://static.wikia.nocookie.net/megamitensei/images/c/c6/Persona_5_Royal_Kasumi.png/revision/latest/scale-to-width-down/54?cb=20190424131819',
                    'https://static.wikia.nocookie.net/megamitensei/images/2/2a/Chihaya_Mifune.png/revision/latest/scale-to-width-down/52?cb=20161220023405',
                    'https://static.wikia.nocookie.net/megamitensei/images/e/eb/P5_Tae_Takemi.png/revision/latest/scale-to-width-down/68?cb=20161220150151',
                    'https://static.wikia.nocookie.net/megamitensei/images/4/43/Sadayo_Kawakami.png/revision/latest/scale-to-width-down/55?cb=20161220030038',
                    'https://static.wikia.nocookie.net/megamitensei/images/7/78/Hifumi_Togo.png/revision/latest/scale-to-width-down/40?cb=20161220031634',
                    'https://static.wikia.nocookie.net/megamitensei/images/d/dd/Sae_body.png/revision/latest/scale-to-width-down/73?cb=20170430164516',
                    'https://static.wikia.nocookie.net/megamitensei/images/b/be/Lala_in_p5.jpeg/revision/latest/scale-to-width-down/185?cb=20200621203006',
                    'https://static.wikia.nocookie.net/megamitensei/images/d/da/Shiho_portrait.png/revision/latest/scale-to-width-down/149?cb=20200611214916',
                    'https://static.wikia.nocookie.net/megamitensei/images/9/9b/P5_Caroline_and_Justine.png/revision/latest/scale-to-width-down/107?cb=20160820081904',
                    'https://static.wikia.nocookie.net/megamitensei/images/e/eb/Chie_Satonaka_render.png/revision/latest/scale-to-width-down/90?cb=20170319070940',
                    'https://static.wikia.nocookie.net/megamitensei/images/6/67/Yukiko_Amagi_render.png/revision/latest/scale-to-width-down/68?cb=20160401000201',
                    'https://static.wikia.nocookie.net/megamitensei/images/3/33/Rise_Kujikawa_render.png/revision/latest/scale-to-width-down/74?cb=20120401110434',
                    'https://static.wikia.nocookie.net/megamitensei/images/5/5e/Naoto_Shirogane_render.png/revision/latest/scale-to-width-down/62?cb=20141129022936',
                    'https://static.wikia.nocookie.net/megamitensei/images/f/f9/Sayoko.png/revision/latest/scale-to-width-down/34?cb=20141130204232',
                    'https://static.wikia.nocookie.net/megamitensei/images/d/da/Eri.png/revision/latest/scale-to-width-down/48?cb=20141205132838',
                    'https://static.wikia.nocookie.net/megamitensei/images/b/b6/Noriko.png/revision/latest/scale-to-width-down/115?cb=20161225083048',
                    'https://static.wikia.nocookie.net/megamitensei/images/6/62/Saki_P4.png/revision/latest/scale-to-width-down/108?cb=20161225083531',
                    'https://static.wikia.nocookie.net/megamitensei/images/9/9d/P4_Ai.png/revision/latest/scale-to-width-down/72?cb=20141130204522',
                    'https://static.wikia.nocookie.net/megamitensei/images/9/9c/Hanako.png/revision/latest/scale-to-width-down/185?cb=20161228095205',
                    'https://static.wikia.nocookie.net/megamitensei/images/9/9d/P4_Ai.png/revision/latest/scale-to-width-down/72?cb=20141130204522',
                    'https://static.wikia.nocookie.net/megamitensei/images/b/bb/Ayane_P4.png/revision/latest/scale-to-width-down/41?cb=20141130205845',
                    'https://static.wikia.nocookie.net/megamitensei/images/c/c8/Yumi_P4.png/revision/latest/scale-to-width-down/42?cb=20141130210058',
                    'https://static.wikia.nocookie.net/megamitensei/images/e/e8/Shiroku.png/revision/latest/scale-to-width-down/148?cb=20161228093212',
                    'https://static.wikia.nocookie.net/megamitensei/images/3/35/Fox_P4.png/revision/latest/scale-to-width-down/115?cb=20141130205614',
                    'https://static.wikia.nocookie.net/megamitensei/images/3/38/Hisano.png/revision/latest/scale-to-width-down/67?cb=20170626000830',
                    'https://static.wikia.nocookie.net/megamitensei/images/4/41/Margaret_Render.png/revision/latest/scale-to-width-down/60?cb=20141202125527',
                    'https://static.wikia.nocookie.net/megamitensei/images/b/b9/Marie_portrait.png/revision/latest/scale-to-width-down/153?cb=20140901234218',
                    'https://static.wikia.nocookie.net/megamitensei/images/6/61/P4_Mayumi.png/revision/latest/scale-to-width-down/90?cb=20141130210440',
                    'https://static.wikia.nocookie.net/megamitensei/images/1/14/Misuzu.png/revision/latest/scale-to-width-down/105?cb=20150909032202',
                    'https://static.wikia.nocookie.net/megamitensei/images/4/4e/P3P_Female_Protagonist_Render.png/revision/latest/scale-to-width-down/61?cb=20141127082048',
                    'https://static.wikia.nocookie.net/megamitensei/images/6/6d/Yukari_Takeba_render.png/revision/latest/scale-to-width-down/74?cb=20161014011943',
                    'https://static.wikia.nocookie.net/megamitensei/images/d/d4/Mitsuru_Kirijo_render.png/revision/latest/scale-to-width-down/56?cb=20141127073232',
                    'https://static.wikia.nocookie.net/megamitensei/images/d/d9/P3_Fuuka_Render.png/revision/latest/scale-to-width-down/65?cb=20141127071226',
                    'https://static.wikia.nocookie.net/megamitensei/images/0/01/Aigis_render.png/revision/latest/scale-to-width-down/72?cb=20141127071439',
                    'https://static.wikia.nocookie.net/megamitensei/images/5/5f/Metis_render.png/revision/latest/scale-to-width-down/97?cb=20150321043922',
                    'https://static.wikia.nocookie.net/megamitensei/images/f/f8/P3_Isako_Toriumi_Render.png/revision/latest/scale-to-width-down/118?cb=20141130213313',
                    'https://static.wikia.nocookie.net/megamitensei/images/f/f3/Emiri_Kanou.png/revision/latest/scale-to-width-down/97?cb=20120803150548',
                    'https://static.wikia.nocookie.net/megamitensei/images/8/81/Ounishi.png/revision/latest/scale-to-width-down/113?cb=20160921070208',
                    'https://static.wikia.nocookie.net/megamitensei/images/5/52/Terauchi.png/revision/latest/scale-to-width-down/119?cb=20160921070556',
                    'https://static.wikia.nocookie.net/megamitensei/images/c/ce/Miyahara.png/revision/latest/scale-to-width-down/149?cb=20160921070824',
                    'https://static.wikia.nocookie.net/megamitensei/images/d/d9/P3_Chihiro_Render.png/revision/latest/scale-to-width-down/81?cb=20141203221932',
                    'https://static.wikia.nocookie.net/megamitensei/images/f/f8/P3_Yuko_Nishi_Render.png/revision/latest/scale-to-width-down/91?cb=20160920103400',
                    'https://static.wikia.nocookie.net/megamitensei/images/a/a6/P3-Rio.jpg/revision/latest/scale-to-width-down/81?cb=20091001043709',
                    'https://static.wikia.nocookie.net/megamitensei/images/4/45/P3-Saori.jpg/revision/latest/scale-to-width-down/81?cb=20091001044428',
                    'https://static.wikia.nocookie.net/megamitensei/images/3/39/P3_Natsuki_Render.png/revision/latest/scale-to-width-down/114?cb=20140903230445',
                    'https://static.wikia.nocookie.net/megamitensei/images/3/30/Chidori_Yoshino_Portrait.png/revision/latest/scale-to-width-down/174?cb=20160328033942',
                    'https://static.wikia.nocookie.net/megamitensei/images/a/ad/Elizabeth_portrait_in_P3_and_P4A.png/revision/latest/scale-to-width-down/151?cb=20150919002630',
                    'There is no best girl.']

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

client.once('ready', () => {
    console.log('Saitsu is online!')
    client.user.setActivity("With Erge's emotions")
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'naoto') {
        message.channel.send('<a:naotodance:746218185019359332>');
    }
    else if (command === 'kiwi') {
        message.channel.send('<a:spinning_kiwi:758896501346402324>');
    }
    else if (command === 'online') {
        message.channel.send("Mods don't work online, you can't use mods with the normal version of the game, so any attempt of using mods will result in you getting disconnected. However, here are some alternatives: 1) Use a cloud service like Parsec to play with your friends. 2) Use the modded exe, both you and your friend will need to use it, otherwise you'll both get disconnected.");
    }
    else if (command === 'console') {
        message.channel.send("Listen, most modding communities don't support console modding, not only because it's impractical, but also because you actually void your warranty for the console due to you modifying it. Lastly, stuff like jailbreak CAN damage your console. So, please don't ask for mods on console.");
    }
    else if (command === 'saitsu') {
        message.channel.send('Nagito Komaeda stan');
    }
    else if (command === 'kechi') {
        message.channel.send("He's weeb, a nerd and a simp");
    }
    else if (command === 'kill') {
        message.channel.send('https://www.youtube.com/watch?v=1JR95qMfo9A');
    }
    else if (command === 'ultiam') {
        message.channel.send('https://media.discordapp.net/attachments/731593314897494096/734451592593670234/unknown.png?width=1442&height=624');
    }
    else if (command === 'hate') {
        message.channel.send('I hate it here, man.');
    }
    else if (command === 'chair') {
        message.channel.send('Shut the fuck up before I shove a folding chair up your ass, Erge <:GUN:749040707225780416>');
    }
    else if (command === 'erge') {
        message.channel.send('Erge is a little bitch');
    }
    else if (command === 'tekka') {
        message.channel.send('https://www.ko-fi.com/tekka');
    }
    else if (command === 'pre') {
        message.channel.send('https://cdn.discordapp.com/attachments/711289885071507519/758940869708873758/prerequisites.mp4');
    }
    else if (command === 'help') {
        message.channel.send('No.')
    }
    else if (command === 'joke') {
        message.channel.send("**yeah that's the fucking joke.**");
    }
    else if (command === 'unamused') {
        message.channel.send('https://cdn.discordapp.com/attachments/339880946826346498/662847082734026753/20200103_233707.png')
    }
    else if (command === 'nutshell') {
        message.channel.send('https://media.discordapp.net/attachments/711289885071507519/760284192751091712/unknown.png')
    }
    else if (command === 'pain') {
        message.channel.send('https://media.discordapp.net/attachments/711289885071507519/766808859653177364/Nagito_13.png?width=575&height=677')
    }
    else if (command === 'cry') {
        message.channel.send('https://cdn.discordapp.com/attachments/711289885071507519/768571880876933151/Shuichi_cry.png')
    }
    else if (command === 'bestgirl') {
        
        message.channel.send(girls[getRandomNumber(0,(girls.length-1))])
    }
    else if (command === 'crop') {
        message.channel.send('https://media.discordapp.net/attachments/711289885071507519/770800235202215966/Z.png')
    }
    else if (command === 'cru') {
        message.channel.send('https://media.discordapp.net/attachments/711289885071507519/777652930235990057/Shuichi_cru.png?width=388&height=678')
    }
    else if (command === 'erge2') {
        message.channel.send('He do be a furry doe.')
    }
    else if (command === 'github') {
        message.channel.send('https://github.com/SaitsuP/saitsu-bot')
    }
    else if (command === 'mudkip') {
        message.channel.send('https://cdn.discordapp.com/attachments/791485430758375447/791772311304405022/OIP.png')
    }
    else if (command === 'PPPU') {
        message.channel.send('https://cdn.discordapp.com/attachments/746230710150496367/795605254828982302/IMG_20210104_175109.jpg')
    }
});

client.login(process.env.token);