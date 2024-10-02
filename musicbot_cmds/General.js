const { zokou } = require("../framework/zokou");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

zokou({ nomCom: "owner", categorie: "General", reaction: "🚘" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

zokou({ nomCom: "dev", categorie: "General", reaction: "🎣" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "𝕬𝖗𝖑𝖔𝖉𝖗𝖆𝖌𝖔𝖓", numero: "254702713600" },
      { nom: "᚛𝕬𝖗𝖑𝖔𝖉𝖗𝖆𝖌𝖔𝖓᚜", numero: "254746764468" },
      { nom: "owner 𝕬𝖗𝖑𝖔𝖉𝖗𝖆𝖌𝖔𝖓", numero: "254702713600" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "WELCOME TO 𝖒𝖚𝖘𝖎𝖈𝖇𝖔𝖙♫︎ MEDIA HELP CENTER! ASK FOR HELP FROM ANY OF THE DEVELOPERS BELOW:\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("𝕿𝖍𝖆𝖓𝖐 𝖞𝖔𝖚 𝖋𝖔𝖗 𝖈𝖍𝖔𝖔𝖘𝖎𝖓𝖌 𝖒𝖚𝖘𝖎𝖈𝖇𝖔𝖙♫︎\n\n ♫︎ 𝖈𝖍𝖆𝖓𝖓𝖊𝖑 𝖑𝖎𝖓𝖐 ♫︎ \n\n𓅓⁠⁠⁠⁠[https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q]") 
  await zk.sendMessage(auteurMessage,{text : `𝖒𝖚𝖘𝖎𝖈𝖇𝖔𝖙 𝖘𝖚𝖕𝖕𝖔𝖗𝖙 𝖈𝖍𝖆𝖓𝖓𝖊𝖑.\n\n https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q `},{quoted :ms})

})
