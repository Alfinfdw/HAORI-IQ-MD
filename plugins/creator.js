function handler(m) {
const PhoneNumber = require('awesome-phonenumber')
let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6282223011829-6285852939370@g.us"}, "message": {orderMessage: {itemCount: 1,status: 200, surface: 200, message: `                   「 MY OWNER 」            `, orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; Pilar;;;'
                    + 'FN: PilarXcode\n' // full name
                    + 'ORG:Pilar;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282223011829:+628-222-301-1829\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'PilarXcode', contacts: [{ vcard }] } }, { quoted: ftroli })
m.reply(m.chat,'*Tuh nomor owner ku*\n*Chat jika PENTING*', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
