const ms = require('ms');

var boys = ['https://static.wikia.nocookie.net/megamitensei/images/1/15/P2EP-EarringBoy.jpg/revision/latest/scale-to-width-down/250?cb=20120715034502',
                'https://static.wikia.nocookie.net/megamitensei/images/4/4c/Masao_Inaba_render.png/revision/latest/scale-to-width-down/1000?cb=20170304020643',
                'https://static.wikia.nocookie.net/megamitensei/images/0/0f/KeiP1.png/revision/latest/scale-to-width-down/804?cb=20170304025254',
                'https://static.wikia.nocookie.net/megamitensei/images/a/a5/HidehikoP1.png/revision/latest/scale-to-width-down/1000?cb=20170304022220',
                'https://static.wikia.nocookie.net/megamitensei/images/5/50/Reiji1.png/revision/latest/scale-to-width-down/581?cb=20170304053304',
                'https://static.wikia.nocookie.net/megamitensei/images/f/f4/Tatsuya_full.png/revision/latest/scale-to-width-down/311?cb=20161022120442',
                'https://static.wikia.nocookie.net/megamitensei/images/3/3d/Eikichi_Mishina_render.png/revision/latest/scale-to-width-down/259?cb=20141213153059',
                'https://static.wikia.nocookie.net/megamitensei/images/f/f3/Jun_Kurosu_render.png/revision/latest/scale-to-width-down/136?cb=20141213152814',
                'https://static.wikia.nocookie.net/megamitensei/images/0/00/Baofu_full.png/revision/latest/scale-to-width-down/303?cb=20170310131034',
                'https://static.wikia.nocookie.net/megamitensei/images/6/60/P3DMN_P5DSN_-_Shinjiro.png/revision/latest/scale-to-width-down/417?cb=20180518230703',
                'https://static.wikia.nocookie.net/megamitensei/images/8/83/Koromaru_render.png/revision/latest/scale-to-width-down/410?cb=20141127083402',
                'https://static.wikia.nocookie.net/megamitensei/images/9/90/Akihiko_Sanada_render.png/revision/latest/scale-to-width-down/465?cb=20161019073639',
                'https://static.wikia.nocookie.net/megamitensei/images/d/dd/P3_Bebe_Render.png/revision/latest/scale-to-width-down/257?cb=20140903231208',
                'https://static.wikia.nocookie.net/megamitensei/images/1/1a/P3_Kenji.png/revision/latest/scale-to-width-down/311?cb=20140903225008',
                'https://static.wikia.nocookie.net/megamitensei/images/1/1d/Ryoji_render.png/revision/latest/scale-to-width-down/310?cb=20141205105944',
                'https://static.wikia.nocookie.net/megamitensei/images/9/95/P3_Nozomi_%28Summer%29_Render.png/revision/latest/scale-to-width-down/263?cb=20140903230655',
                'https://static.wikia.nocookie.net/megamitensei/images/2/2f/P3_Keisuke.png/revision/latest/scale-to-width-down/293?cb=20140903225922',
                'https://static.wikia.nocookie.net/megamitensei/images/c/cc/P3_Jin_Render.png/revision/latest/scale-to-width-down/268?cb=20141102201837',
                'https://static.wikia.nocookie.net/megamitensei/images/2/20/P3_Kazushi_Miyamoto_Render.png/revision/latest/scale-to-width-down/284?cb=20140903225737',
                'https://static.wikia.nocookie.net/megamitensei/images/b/b7/P3_Hidetoshi.png/revision/latest/scale-to-width-down/233?cb=20140902021851',
                'https://static.wikia.nocookie.net/megamitensei/images/7/73/P3_Edogawa_Render.png/revision/latest/scale-to-width-down/346?cb=20160518090432',
                'https://static.wikia.nocookie.net/megamitensei/images/6/60/P3_Ikutsuki_protrait_Render.png/revision/latest/scale-to-width-down/250?cb=20140119053058',
                'https://static.wikia.nocookie.net/megamitensei/images/b/b3/Junpei_Iori_render.png/revision/latest/scale-to-width-down/1000?cb=20141127072617',
                'https://static.wikia.nocookie.net/megamitensei/images/2/21/P3_Protagonist_render.png/revision/latest/scale-to-width-down/247?cb=20161005054124',
                'https://static.wikia.nocookie.net/megamitensei/images/0/09/Yutransparent.png/revision/latest/scale-to-width-down/1000?cb=20141208022227',
                'https://static.wikia.nocookie.net/megamitensei/images/5/5c/P4A_Kanji_Render.png/revision/latest/scale-to-width-down/1000?cb=20141207152844',
                'https://static.wikia.nocookie.net/megamitensei/images/d/d2/Persona_4_arena_Yosuke.png/revision/latest/scale-to-width-down/1000?cb=20141207152626',
                'https://static.wikia.nocookie.net/megamitensei/images/e/e9/P4A_Teddie_Render.png/revision/latest/scale-to-width-down/1000?cb=20141208100734',
                'https://static.wikia.nocookie.net/megamitensei/images/4/42/P4DojimaRender.png/revision/latest/scale-to-width-down/597?cb=20141127084405',
                'https://static.wikia.nocookie.net/megamitensei/images/d/d6/Adachi.png/revision/latest/scale-to-width-down/554?cb=20141127052110',
                'https://static.wikia.nocookie.net/megamitensei/images/3/39/Namatame.png/revision/latest/scale-to-width-down/422?cb=20141205082115',
                'https://static.wikia.nocookie.net/megamitensei/images/2/23/Mitsuo_render.png/revision/latest/scale-to-width-down/268?cb=20161225081742',
                'https://static.wikia.nocookie.net/megamitensei/images/8/82/P4-Morooka.png/revision/latest/scale-to-width-down/537?cb=20150920222043',
                'https://static.wikia.nocookie.net/megamitensei/images/9/95/Daisuke.png/revision/latest/scale-to-width-down/601?cb=20141130205349',
                'https://static.wikia.nocookie.net/megamitensei/images/2/25/P4_Kou.png/revision/latest/scale-to-width-down/234?cb=20141130204927',
                'https://static.wikia.nocookie.net/megamitensei/images/8/8a/Naoki_render.png/revision/latest/scale-to-width-down/247?cb=20141209154931',
                'https://static.wikia.nocookie.net/megamitensei/images/2/22/Daidara.png/revision/latest/scale-to-width-down/310?cb=20161228092302',
                'https://static.wikia.nocookie.net/megamitensei/images/a/a0/Igor_%28Persona_5%29.png/revision/latest/scale-to-width-down/991?cb=20160819124205',
                'https://static.wikia.nocookie.net/megamitensei/images/6/6a/P3_Tanaka_Render.png/revision/latest/scale-to-width-down/359?cb=20181004234548',
                'https://static.wikia.nocookie.net/megamitensei/images/3/3c/P5RHero.png/revision/latest/scale-to-width-down/795?cb=20190726142050',
                'https://static.wikia.nocookie.net/megamitensei/images/0/0f/P5R_Morgana.png/revision/latest/scale-to-width-down/517?cb=20190816160112',
                'https://static.wikia.nocookie.net/megamitensei/images/1/13/P5RRyujiSakamoto.png/revision/latest/scale-to-width-down/712?cb=20190726142102',
                'https://static.wikia.nocookie.net/megamitensei/images/d/d5/P5RYusukeKitagawa.png/revision/latest/scale-to-width-down/566?cb=20190726142233',
                'https://static.wikia.nocookie.net/megamitensei/images/0/02/P5R_Akechi.png/revision/latest/scale-to-width-down/278?cb=20190816155449',
                'https://static.wikia.nocookie.net/megamitensei/images/0/0d/P5_Sojiro_Sakura.png/revision/latest/scale-to-width-down/582?cb=20161220024421',
                'https://static.wikia.nocookie.net/megamitensei/images/b/ba/P5_Munehisa_Iwai.png/revision/latest/scale-to-width-down/773?cb=20161220025304',
                'https://static.wikia.nocookie.net/megamitensei/images/a/a5/Yuki_Mishima.png/revision/latest/scale-to-width-down/346?cb=20161220033104',
                'https://static.wikia.nocookie.net/megamitensei/images/8/8c/Toranosuke_Yoshida.png/revision/latest/scale-to-width-down/701?cb=20161220190823',
                'https://static.wikia.nocookie.net/megamitensei/images/0/09/Persona_5_Royal_Takuto.png/revision/latest/scale-to-width-down/342?cb=20190424132831',
                'https://static.wikia.nocookie.net/megamitensei/images/b/bd/P5_Principal_of_Syujin_High_School.png/revision/latest/scale-to-width-down/653?cb=20200611140047',
                'https://static.wikia.nocookie.net/megamitensei/images/3/31/Director_of_District_Public_Prosecutors_Office.png/revision/latest/scale-to-width-down/637?cb=20200611140758',
                'https://static.wikia.nocookie.net/megamitensei/images/9/90/Natsuhiko_Nakanohara.png/revision/latest/scale-to-width-down/617?cb=20200611135045',
                'https://static.wikia.nocookie.net/megamitensei/images/5/51/P5R_Shibusawa.png/revision/latest/scale-to-width-down/601?cb=20200416175446',
                'https://static.wikia.nocookie.net/megamitensei/images/b/b1/P5R_Shinichi_Yoshizawa.png/revision/latest/scale-to-width-down/625?cb=20200417105015',
                'https://static.wikia.nocookie.net/megamitensei/images/1/12/Ushimaru.png/revision/latest/scale-to-width-down/631?cb=20200611134335',
                'https://static.wikia.nocookie.net/megamitensei/images/0/0c/Inui.png/revision/latest/scale-to-width-down/712?cb=20200611134128',
                'https://static.wikia.nocookie.net/megamitensei/images/d/db/Hiruta.png/revision/latest/scale-to-width-down/580?cb=20200611134005',
                'https://static.wikia.nocookie.net/megamitensei/images/b/ba/P5S_Zenkichi_Hasegawa.png/revision/latest/scale-to-width-down/361?cb=20191223220442',
                'https://static.wikia.nocookie.net/megamitensei/images/9/99/P3DMN_P5DSN_-_Sho_Artwork.png/revision/latest/scale-to-width-down/707?cb=20180512015143',
                'https://static.wikia.nocookie.net/megamitensei/images/2/23/PQ_Zen_Render.png/revision/latest/scale-to-width-down/431?cb=20140531163132',
                'There is no best boy.']

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
    name: 'bestboy',
    description: "Bot will send random Persona boy",
    execute(message, args){
        message.channel.send(boys[getRandomNumber(0,(boys.length-1))])
    }
}