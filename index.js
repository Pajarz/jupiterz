const

	{

		WAConnection,

		MessageType,

		Presence,

		MessageOptions,

		Mimetype,

		WALocationMessage,

		WA_MESSAGE_STUB_TYPES,

		WA_DEFAULT_EPHEMERAL,

		ReconnectMode,

		ProxyAgent,

		GroupSettingChange,

		waChatKey,

		mentionedJid,

		processTime,

	} = require("@adiwajshing/baileys")

const hx = require('hxz-api')

const zee = require('api-alphabot')

const qrcode = require("qrcode-terminal")

const moment = require("moment-timezone")

const speed = require('performance-now')

const request = require('request');

const { spawn, exec, execSync } = require("child_process")

const fs = require("fs")

const axios = require("axios")

const ffmpeg = require('fluent-ffmpeg')

const { EmojiAPI } = require("emoji-api");

const ig = require('insta-fetcher')

const emoji = new EmojiAPI()

const fetch = require('node-fetch');

const phoneNum = require('awesome-phonenumber')

const gis = require('g-i-s');

const got = require("got");

const imageToBase64 = require('image-to-base64');

const ID3Writer = require('browser-id3-writer');		

const brainly = require('brainly-scraper')

const yts = require( 'yt-search')

const ms = require('parse-ms')

const toMs = require('ms')

const { error } = require("qrcode-terminal")

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const { color, bgcolor } = require('./lib/color')

const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')

const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')

const { webp2mp4File} = require('./lib/webp2mp4')

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

const Exif = require('./lib/exif');

const exif = new Exif();



banChats = false
modelmenu = 'button'
thumbnail = fs.readFileSync('./foto/thumb.jpeg')

owner = '6288293524506'
ownerNumbers = [`${owner}@s.whatsapp.net`]
fake = 'BOT-•~•'

//=================================================//

module.exports = hexa = async (hexa, mek) => {

	try {

        if (!mek.hasNewMessage) return

        mek = mek.messages.all()[0]

		if (!mek.message) return

		if (mek.key && mek.key.remoteJid == 'status@broadcast') return

		global.blocked

        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message

        	const content = JSON.stringify(mek.message)

		const from = mek.key.remoteJid

		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')

        const type = Object.keys(mek.message)[0]        

        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()

		const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	

        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''

		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

		const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		

		const args = body.trim().split(/ +/).slice(1)

		const arg = body.slice(command.length + 2, body.length)

		const isCmd = body.startsWith(prefix)

		const q = args.join(' ')

		const botNumber = hexa.user.jid

		const botNumberss = hexa.user.jid + '@c.us'

		const isGroup = from.endsWith('@g.us')

		let sender = isGroup ? mek.participant : mek.key.remoteJid

		const totalchat = await hexa.chats.all()

		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''

		const groupName = isGroup ? groupMetadata.subject : ''

		const groupId = isGroup ? groupMetadata.jid : ''

		const groupMembers = isGroup ? groupMetadata.participants : ''

		const groupDesc = isGroup ? groupMetadata.desc : ''

		const groupOwner = isGroup ? groupMetadata.owner : ''

		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

		const isGroupAdmins = groupAdmins.includes(sender) || false

        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }

        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'

        const isOwner = ownerNumbers.includes(sender)




        //MESS

		mess = {

			wait: 'Permintaan Anda Sedang Kami Proses.....',

			success: 'Berhasil!',

			wrongFormat: 'Format salah, coba liat lagi di menu',

			error: {

				stick: 'bukan sticker itu:v',

				Iv: 'Linknya error:v'

			},

			only: {

				group: 'Khusus grup ngab',

			}

		}

		const isUrl = (url) => {

        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))

        }



        const reply = (teks) => {

            hexa.sendMessage(from, teks, text, {quoted:mek})

        }



        const sendMess = (hehe, teks) => {

            hexa.sendMessage(hehe, teks, text)

        }

        

        const sendSticker = (from, filename, mek) => {

	    hexa.sendMessage(from, filename, MessageType.sticker, {quoted: mek})

      }



        const mentions = (teks, memberr, id) => {

            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })

        }

        

        const sendFileFromUrl = async (from, url, caption, mek, men) => {

            let mime = '';

            let res = await axios.head(url)

            mime = res.headers['content-type']

            if (mime.split("/")[1] === "gif") {

                return hexa.sendMessage(from, await getBuffer(url), video ,{caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4' ,quoted: mek})

                }

            let type = mime.split("/")[0]+"Message"

            if(mime === "application/pdf"){

                return hexa.sendMessage(from, await getBuffer(url), document, {mimetype: 'application/pdf', caption: caption, mentions: men ? men : [], quoted: mek })

            }

            if(mime.split("/")[0] === "image"){

                return hexa.sendMessage(from, await getBuffer(url), image ,{ caption: caption, mentions: men ? men : [], quoted: mek})

            }

            if(mime.split("/")[0] === "video"){

                return hexa.sendMessage(from, await getBuffer(url), video, {caption: caption, mentions: men ? men : [], mimetype: 'video/mp4', quoted: mek})

            }

            if(mime.split("/")[0] === "audio"){

                return hexa.sendMessage(from, await getBuffer(url), audio, {caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg', quoted: mek })

            }

        }



        const fakestatus = (teks) => {

            hexa.sendMessage(from, teks, text, {

                quoted: {

                    key: {

                        fromMe: false,

                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})

                    },

                    message: {

                        "imageMessage": {

                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",

                            "mimetype": "image/jpeg",

                            "caption": fake,

                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",

                            "fileLength": "28777",

                            "height": 1080,

                            "width": 1079,

                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",

                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",

                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",

                            "mediaKeyTimestamp": "1610993486",

                            "jpegThumbnail": fs.readFileSync('./foto/thumb.jpeg'),

                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="

                        }

                    }

                }

            })

        }

        const fakethumb = (teks, yes) => {

            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./foto/fake.jpeg'),quoted:mek,caption:yes})

        }

        const fakegroup = (teks) => {

            hexa.sendMessage(from, teks, text, {

                quoted: {

                    key: {

                        fromMe: false,

                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})

                    },

                    message: {

                        "imageMessage": {

                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",

                            "mimetype": "image/jpeg",

                            "caption": fake,

                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",

                            "fileLength": "28777",

                            "height": 1080,

                            "width": 1079,

                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",

                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",

                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",

                            "mediaKeyTimestamp": "1610993486",

                            "jpegThumbnail": fs.readFileSync('./foto/thumb.jpeg'),

                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="

                        }

                    }

                }

            })

        }

        const sendStickerFromUrl = async(to, url) => {

                var names = Date.now() / 10000;

                var download = function (uri, filename, callback) {

                    request.head(uri, function (err, res, body) {

                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

                    });

                };

                download(url, './foto' + names + '.png', async function () {

                    console.log('selesai');

                    let filess = './foto' + names + '.png'

                    let asw = './foto' + names + '.webp'

                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {

                        let media = fs.readFileSync(asw)

                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})

                        fs.unlinkSync(filess)

                        fs.unlinkSync(asw)

                    });

                });

            }

        const sendMediaURL = async(to, url, text="", mids=[]) =>{

                if(mids.length > 0){

                    text = normalizeMention(to, text, mids)

                }

                const fn = Date.now() / 10000;

                const filename = fn.toString()

                let mime = ""

                var download = function (uri, filename, callback) {

                    request.head(uri, function (err, res, body) {

                        mime = res.headers['content-type']

                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

                    });

                };

                download(url, filename, async function () {

                    console.log('done');

                    let media = fs.readFileSync(filename)

                    let type = mime.split("/")[0]+"Message"

                    if(mime === "image/gif"){

                        type = MessageType.video

                        mime = Mimetype.gif

                    }

                    if(mime.split("/")[0] === "audio"){

                        mime = Mimetype.mp4Audio

                    }

                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})

                    

                    fs.unlinkSync(filename)

                });

            }



       const sendButMessage = (id, text1, desc1, but = [], options = {}) => {

					const buttonMessage = {

						contentText: text1,

						footerText: desc1,

						buttons: but,

						headerType: 1,

						};

						hexa.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);

					};

				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {

					them = gam1

					mediaxxaa = await hexa.prepareMessage(id, them, MessageType.location, {thumbnail: them})

					locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa

					const buttonMessages = {

						locationMessage: locmhan.message.locationMessage,

						contentText: text1,

						footerText: desc1,

						buttons: but,

						headerType: 6

						}

						hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)

						}

				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {

					them = vid1

					mediaxxaa = await hexa.prepareMessage(id, them, MessageType.video)

					vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa

					const buttonMessages = {

						videoMessage: vimhan.message.videoMessage,

						contentText: text1,

						footerText: desc1,

						buttons: but,

						headerType: 5

						}

						hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)

						}

				const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {

					them = vid1

					mediaxxaa = await hexa.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})

					imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa

					const buttonMessages = {

						imageMessage: imgmhan.message.imageMessage,

						contentText: text1,

						footerText: desc1,

						buttons: but,

						headerType: 4

						}

					hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)

				}   
				
	   const menunya = `
Hai ${pushname}
Prefix : 「 MULTI-PREFIX 」


*</OWNER>*
®${prefix}status

*</MAKER>*
®${prefix}sticker
®${prefix}swm <author|packname>
®${prefix}take <author|packname>
®${prefix}fdeface
®${prefix}emoji

*</CONVERT>*
®${prefix}toimg

*</TAG>*
®${prefix}hidetag
®${prefix}kontag
®${prefix}sticktag
®${prefix}totag

*</DOWNLOAD>*
®${prefix}igstalk <query>
®${prefix}play <query>
®${prefix}video <query>
®${prefix}ytmp3 <link>
®${prefix}ytmp4 <link>
®${prefix}ig <link>
®${prefix}igstory <username>
®${prefix}tiktok <link>
®${prefix}anime <random>
®${prefix}pinterest <query>
®${prefix}komiku <query>
®${prefix}lirik <query>
®${prefix}chara <query>
®${prefix}playstore <query>
®${prefix}otaku <query>

👑Owner Only👑
®${prefix}exif
®${prefix}culik

®${prefix}setmenu
®img
®combine
®product
®katalog
®butloc
®buttonimage
®deafult

❏ *SELF-BOT* ❏`
//========================================================================================================================//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']

		const isMedia = (type === 'imageMessage' || type === 'videoMessage')

		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))

      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))

     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

        if (!mek.key.fromMe && banChats === true) return

switch (command) {  
case 'menu': case 'command': case 'help' :
              if(modelmenu == 'img'){
              hexa.sendMessage(from,thumbnail,image,{quoted:mek,caption:menunya})
           }
else if (modelmenu == 'combine'){
             hexa.sendMessage(from, thumbnail, MessageType.image, {
             thumbnail: thumbnail,
             caption: menunya,
           "contextInfo": {
             text: 'HelloWorld',
          mentionedJid: [sender],
           "externalAdReply": {
         "title": `Hi Kak ${pushname}👋🏻`,
           "body": `${fake}`,
         "previewType": "PHOTO",
           "thumbnail": thumbnail,
         "sourceUrl": "https://github.com/pajarz/jupiterz"
           }},quoted:mek})
          } 
else if (modelmenu == 'product'){
           imeuhh = await hexa.prepareMessage('0@s.whatsapp.net', thumbnail, image) 
           imeghh = imeuhh.message.imageMessage
           reshh = await hexa.prepareMessageFromContent(from,{
         "productMessage": {
          "product": {
        "productImage": imeghh,
         "productId": "5226811344019013",
        "title": `${fake}`,
          "description": menunya,
        "currencyCode": "IDR",
         "priceAmount1000": `1000`,
       "productImageCount": 1
         },
         "businessOwnerJid": "6285770292764@s.whatsapp.net",
       "contextInfo": {
        "forwardingScore": 508,
       "isForwarded": true
        }
     }
       }, {quoted:mek, contextInfo:{forwardingScore: 508, isForwarded: true, mentionedJid: [sender]}}) 
       hexa.relayWAMessage(reshh)
} 
else if(modelmenu == 'katalog'){
          var menuuu = hexa.prepareMessageFromContent(from,{
         "orderMessage": {
         "orderId": "278352361007070",
         "thumbnail": thumbnail,
         "itemCount": 9999,
         "status": "INQUIRY",
         "surface": "CATALOG",
         "message": menunya,
         "orderTitle": 999999,
         "sellerJid": "6285770292764@s.whatsapp.net",
         "token": "AR6fNLe1p/2qa2FUHIMk4gXm2TWMqjREXIZwKbk4lUt58Q==",
           }},{quoted: mek})
           heca.relayWAMessage(menuuu)
          }
else if (modelmenu = 'butloc'){
          sendButLocation(from, `${menunya}`, "Mr.Fajar", {jpegThumbnail: thumbnail}, 
          [{buttonId: `.rules`, buttonText: {displayText: '📒R&S'} ,type:1},
          {buttonId: `.owner`, buttonText: {displayText: '👤 OWNER'}, type: 1},
          {buttonId: `.sc`, buttonText: {displayText: '📄 SCRIPT'}, type: 1}],
         {contextInfo: { mentionedJid: [sender]}})
         }
 else if (modelmenu = 'button'){ 
        teks = `${menunya}`
        py = await hexa.prepareMessage(from, thumbnail, image)
        gbutsan = [
        {buttonId: `.sc`, buttonText: {displayText: '🔥SC🔥𝐂'}, type: 1},
        {buttonId: `.owner`, buttonText: {displayText: '🔥OWNER🔥'}, type: 1}
        ]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: `${menunya}`,
        footerText: fake,
        buttons: gbutsan,
        headerType: 4
        }
        await hexa.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:mek})
       }
else if(modelmenu == 'default'){
           reply(menunya)
           }
            break
            
    case 'setmenu':
             if (!isOwner && !mek.key.fromMe) return  reply(`Lu Yang Buat Gw?`)
             if (args.length < 1) return reply(`Hi Owner1👋\nPilih salah satu di bawah ini!!\nExample : ${prefix + command} katalog\n• katalog\n• default\n• product\n• combine\n• img\n• buttonlokasi`)
             if(args[0] == 'combine'){
             modelmenu = 'combine'
             reply(`Succses changed menu combine`)
           }
            else if(args[0] == 'img'){
             modelmenu = 'img'
             reply(`Succses changed menu Image`)
           }
           else if(args[0] == 'button'){
            modelmenu = 'button'
            reply(`Succses changed menu Button`)
          }
            else if(args[0] == 'katalog'){
            modelmenu = 'katalog'
            reply(`Succses changed menu Katalog`)
          }
            else if(args[0] == 'product'){
            modelmenu = 'product'
            reply(`Succses changed Menu Product`)
          }
           else if(args[0] == 'buttonimage'){
           modelmenu = 'button'
           reply(`Succses changed menu Buttonimage`)
         }
         else if(args[0] == 'butloc'){
           modelmenu = 'butloc'
           reply(`Succses changed menu LOKASI`)
         }
         else if(args[0] == 'default'){
          modelmenu = 'default'
          reply(`Succses changed menu Default`)
        } else {
         reply(`Input ${args[0]} tidak ada di List!!`)
       }
        break
            case 'owner':
            case 'creatoe':
            case 'developer':
            let ini_list = []
            for (let as of ownerNumbers) {
            const vname = hexa.contacts[as] != undefined ? hexa.contacts[as].vname || hexa.contacts[as].notify : undefined
            ini_list.push({
            "displayName": `Developer ${fake}`,
     "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `Fajar`}\nitem1.TEL;waid=${as.split('@')[0]}:${as.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
            }
            hehe = await hexa.sendMessage(from, {
            "displayName": `${ini_list.length} kontak`,
            "contacts": ini_list 
            }, 'contactsArrayMessage', { quoted: mek })
            hexa.sendMessage(from,`Nih Kak Pengembang Bot Ini:)`,text,{quoted: hehe})
            break
	case 'script':
		case 'sc':
		case 'sourcecode':
		anu =`╭─❒ SCRIPT
│◦➛  Mr.Fajar tzy
│
└──────[ GITHUB ]──────❒
  │◦➛ SC INI 
  │◦➛ https://github.com/pajarz/jupiterz
  └──────────────────❒`
 buttons = [{buttonId: `.command`,buttonText:{displayText: '📒MENU BOT'},type:1}]
               imageMsg = (await hexa.prepareMessageMedia(fs.readFileSync(`./foto/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./foto/thumb.jpeg`)})).imageMessage
               buttonsMessage = {
               contentText: `${anu}`,
               footerText: `Jangan Lupa Suport Terus ${fake} `, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
               prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)     
		break
		
	case 'rules':
           rulss = `
           *RULES BAGI PENGGUNA BOT*
    
Tolong Gunakan Botnya Dengan Bijak Kalo Delay Jangan Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
Call/VC Bot Auto Block.
Jangan Call/VC Bot Kalau Tidak aktif.
Bot tidak aktif 24 jam, jadi tergantung kalau ownernya lagi ada waktu botnya juga on.

*Konsekuensi Bila Melanggar Rules*
Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola.

Rules ini untuk kenyamanan semua yang memakai
bot ini 
1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan Pencet *📒 MENU BOT* untuk memulai!`
              buttons = [{buttonId: `.command`,buttonText:{displayText: '📒MENU BOT'},type:1}]
               imageMsg = (await hexa.prepareMessageMedia(fs.readFileSync(`./foto/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./foto/thumb.jpeg`)})).imageMessage
               buttonsMessage = {
               contentText: `${rulss}`,
               footerText: `Jangan Lupa Suport Terus ${fake} `, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
               prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)     
           	break

     case 'getgrup': case 'getgroup': case 'getg':

				const ingfo = await getGroup(totalchat)

				let toxt = `Ingfo grup\nJumlah Grup: ${ingfo.length}\n\n`

				for (let i = 0; i < ingfo.length; i++){

			    toxt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`

				}

				reply(from, toxt, NamaBot)

	            break 

	

        case 'culik':

              if (!isOwner && !mek.key.fromMe) return  reply(`Lu Yang Buat Gw?`)

              if (args.length < 1) return reply('Masukin id grupnya')

              let pantek = []

              for (let i of groupMembers) {

              pantek.push(i.jid)

              }

              hexa.groupAdd(args[0], pantek)

              break      

case 'play': case 'song':

			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu_`)

			var srch = args.join(' ')

			aramas = await yts(srch);

			aramat = aramas.all 

			var mulaikah = aramat[0].url

			try {

				zee.Youtube(mulaikah).then(async (data) => {

					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${aramas.videos[0].title}\n*Ext* : MP3\n*Filesize* : ${data.medias[7].formattedSize}\n*Link* : ${aramas.videos[0].url}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

						const captions = `*---- 「 PLAY MUSIC 」----*

						

• Title : ${aramas.videos[0].title}

• ID : ${aramas.videos[0].videoId}

• Upload : ${aramas.videos[0].ago}

• Size : ${data.medias[7].formattedSize}

• Views: ${aramas.videos[0].views} 

• Duration : ${aramas.videos[0].timestamp}

• Url : ${aramas.videos[0].url}`

var thumbyt = await getBuffer(aramas.videos[0].thumbnail)

sendButLocation(from, captions, 'Fajar' + fake, thumbyt, [{buttonId: `.ytmp4 ${mulaikah}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${mulaikah}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})

						})

				} catch (err) {

					reply('Terjadi kesalahan')

					}

             break

case 'ytmp3': {

			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)

			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')

			var mulaikah = args.join(' ')

			await reply(mess.wait)

                zee.Youtube(mulaikah).then(async (data) => {

                    let txt = `*----「 YOUTUBE AUDIO 」----*\n\n`

                    txt += `*• Quality :* ${data.medias[7].quality}\n`

                    txt += `*• Type :* ${data.medias[7].extension}\n`

                    txt += `*• Size :* ${data.medias[7].formattedSize}\n`

                    txt += `*• Url Source :* ${data.url}\n\n`

                    txt += `_Mohon tunggu sebentar , uploading media..._`

                    sendFileFromUrl(from, data.thumbnail, txt, mek)

                    sendFileFromUrl(from, data.medias[7].url, '', mek)

                })

                }

             break

case 'ytmp4': {

			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)

			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')

			var mulaikah = args.join(' ')

			zee.Youtube(mulaikah).then(async (data) => {

                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`

                    txt += `*• Quality :* ${data.medias[1].quality}\n`

                    txt += `*• Type :* ${data.medias[1].extension}\n`

                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`

                    txt += `*• Url Source :* ${data.url}\n\n`

                    txt += `_Mohon tunggu sebentar , uploading media..._`

                    sendFileFromUrl(from, data.thumbnail, txt, mek)

                    sendFileFromUrl(from, data.medias[1].url, '', mek)                    

                })

                }

             break                              

    case 'tiktok':

sendButLocation(from, 'Silahkan pilih media yang ingin kamu download', '© ' + fake, thumbnail, [{buttonId: `.tiktokwm ${q}`, buttonText: {displayText: 'WM'}, type: 1},{buttonId: `.tiktoknowm ${q}`, buttonText:{displayText: 'NOWM'}, type: 1},{buttonId: `.tiktokmusic ${q}`, buttonText:{displayText: 'AUDIO'}, type: 1}], {quoted: mek})

             break

case 'tiktoknowm':   

			if (!q) return reply('Linknya?')

			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')

			reply(mess.wait)

			let nowem = q

			zee.Ttdownloader(nowem)

			.then(result => {

				const { wm, nowm, audio } = result

				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)

				.then(async (a) => {

					me = `*Link* : ${a.data}`

					noweem = await getBuffer(nowm)

					hexa.sendMessage(from,noweem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})

					})

				}).catch((err) => reply(`Link tidak valid`))

             break 

case 'tiktokwm':

			if (!q) return reply('Linknya?')

			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')

			reply(mess.wait)

			let wem = args.join(' ')

			zee.Ttdownloader(wem)

			.then(result => {

				const { wm, nowm, audio } = result

				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)

				.then(async (a) => {

					me = `*Link* : ${a.data}`

					weem = await getBuffer(wm)

					hexa.sendMessage(from,weem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})

					})

				}).catch((err) => reply(`Link tidak valid`))

            break 

case 'tiktokmusic': case 'tiktokaudio':  

			if (!q) return reply('Linknya?')

			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')

			reply(mess.wait)

			let audi = q

			zee.Ttdownloader(audi)

			.then(result => {

				const { wm, nowm, audio } = result

				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)

				.then(async (a) => {

					audnha = await getBuffer(audio)

					hexa.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})

					})

				}).catch((err) => reply(`Link tidak valid`))

			

             break

    case 'exif':

				if (args.length < 1) return reply(from, `Penggunaan ${prefix}exif nama|author`, mek)

				if (!arg.split('|')) return reply(from, `Penggunaan ${prefix}exif nama|author`, mek)

				exif.create(arg.split('|')[0], arg.split('|')[1])

				reply(from, 'sukses', mek)

	break

    case 'linkwa':

            if(!q) return reply('cari group apa?')

            hx.linkwa(q)

            .then(result => {

            let res = '*「 _LINK WA_ 」*\n\n'

            for (let i of result) {

            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`

            }

            reply(res)

            });

            break

    case 'igstory': 

            if(!q) return reply('Usernamenya?')

            hx.igstory(q)

            .then(async result => {

            for(let i of result.medias){

                if(i.url.includes('mp4')){

                    let link = await getBuffer(i.url)

                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})

                } else {

                    let link = await getBuffer(i.url)

                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  

                }

            }

            });

            break

    case 'lirik':

            if(!q) return reply('lagu apa?')

            let song = await hx.lirik(q)

            sendMediaURL(from,song.thumb,song.lirik)

            break

    case 'otaku':

            if(!q) return reply('judul animenya?')

            let anime = await hx.otakudesu(q)

            rem = `*Judul* : ${anime.judul}

*Jepang* : ${anime.jepang}

*Rating* : ${anime.rate}

*Produser* : ${anime.produser}

*Status* : ${anime.status}

*Episode* : ${anime.episode}

*Durasi* : ${anime.durasi}

*Rilis* : ${anime.rilis}

*Studio* : ${anime.studio}

*Genre* : ${anime.genre}\n

*Sinopsis* :

${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`

            ram = await getBuffer(anime.img)

            hexa.sendMessage(from,ram,image,{quoted:mek,caption:rem})

            break

    case 'komiku':

            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)

            let komik = await hx.komiku(q)

            result = `*Title* : ${komik.title}\n

*Title Indo* : ${komik.indo}\n

*Update* : ${komik.update}\n

*Desc* : ${komik.desc}\n

*Chapter Awal* : ${komik.chapter_awal}

*Chapter Akhir* : ${komik.chapter_akhir}`

            sendMediaURL(from, komik.image,result)

            break

    case 'chara':

            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)

            let im = await hx.chara(q)

            let acak = im[Math.floor(Math.random() * im.length)]

            let li = await getBuffer(acak)

            await hexa.sendMessage(from,li,image,{quoted: mek})

            break

    case 'pinterest':

            if(!q) return reply('gambar apa?')

            let pin = await hx.pinterest(q)

            let ac = pin[Math.floor(Math.random() * pin.length)]

            let di = await getBuffer(ac)

            await hexa.sendMessage(from,di,image,{quoted: mek})

            break

    case 'playstore':

            if(!q) return reply('lu nyari apa?')

            let play = await hx.playstore(q)

            let store = '❉─────────────────────❉\n'

            for (let i of play){

            store += `\n*「 _PLAY STORE_ 」*\n

- *Nama* : ${i.name}

- *Link* : ${i.link}\n

- *Dev* : ${i.developer}

- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`

            }

            reply(store)

            break

   

    case 'status':

            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)

            break

    

    case 'get':

            if(!q) return reply('linknya?')

            fetch(`${args[0]}`).then(res => res.text())  

            .then(bu =>{

            fakestatus(bu)

            })   

            break

    case 'kontag':

            if (!mek.key.fromMe) return reply('SELF-BOT')

            pe = args.join('')

            entah = pe.split('|')[0]

            nah = pe.split('|')[1]

            if (isNaN(entah)) return reply('Invalid phone number');

            members_ids = []

            for (let mem of groupMembers) {

            members_ids.push(mem.jid)

            }

            vcard = 'BEGIN:VCARD\n'

            + 'VERSION:3.0\n'

            + `FN:${nah}\n`

            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`

            + 'END:VCARD'.trim()

            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})

            break

    case 'sticktag':

            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {

            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())

            value = args.join(" ")

            var group = await hexa.groupMetadata(from)

            var member = group['participants']

            var mem = []

            member.map(async adm => {

            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

            })

            var options = {

                contextInfo: { mentionedJid: mem },

                quoted: mek

            }

            ini_buffer = fs.readFileSync(file)

            hexa.sendMessage(from, ini_buffer, sticker, options)

            fs.unlinkSync(file)

            } else {

            reply(`*Reply sticker yang sudah dikirim*`)

            }

            break

    case 'totag':

            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {

            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())

            value = args.join(" ")

            var group = await hexa.groupMetadata(from)

            var member = group['participants']

            var mem = []

            member.map(async adm => {

            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

            })

            var options = {

                contextInfo: { mentionedJid: mem },

                quoted: mek

            }

            ini_buffer = fs.readFileSync(file)

            hexa.sendMessage(from, ini_buffer, sticker, options)

            fs.unlinkSync(file)

            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())

            value = args.join(" ")

            var group = await hexa.groupMetadata(from)

            var member = group['participants']

            var mem = []

            member.map(async adm => {

            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

            })

            var options = {

                contextInfo: { mentionedJid: mem },

                quoted: mek

            }

            ini_buffer = fs.readFileSync(file)

            hexa.sendMessage(from, ini_buffer, image, options)

            fs.unlinkSync(file)

        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {

            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())

            value = args.join(" ")

            var group = await hexa.groupMetadata(from)

            var member = group['participants']

            var mem = []

            member.map(async adm => {

            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

            })

            var options = {

            	mimetype : 'audio/mp4',

            	ptt : true,

                contextInfo: { mentionedJid: mem },

                quoted: mek

            }

            ini_buffer = fs.readFileSync(file)

            hexa.sendMessage(from, ini_buffer, audio, options)

            fs.unlinkSync(file)

        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {

            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())

            value = args.join(" ")

            var group = await hexa.groupMetadata(from)

            var member = group['participants']

            var mem = []

            member.map(async adm => {

            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

            })

            var options = {

            	mimetype : 'video/mp4',

                contextInfo: { mentionedJid: mem },

                quoted: mek

            }

            ini_buffer = fs.readFileSync(file)

            hexa.sendMessage(from, ini_buffer, video, options)

            fs.unlinkSync(file)

        } else{

          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)

        }

        break

    case 'tomp3':

            if (!isQuotedVideo) return fakegroup('Reply videonya!')

            fakegroup(mess.wait)

            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

            media = await hexa.downloadAndSaveMediaMessage(encmedia)

            ran = getRandom('.mp4')

            exec(`ffmpeg -i ${media} ${ran}`, (err) => {

            fs.unlinkSync(media)

            if (err) return fakegroup(`Err: ${err}`)

            buffer453 = fs.readFileSync(ran)

            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })

            fs.unlinkSync(ran)

            })

            break

    case 'fast':

            if (!isQuotedVideo) return fakegroup('Reply videonya!')

            fakegroup(mess.wait)

            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

            media = await hexa.downloadAndSaveMediaMessage(encmedia)

            ran = getRandom('.mp4')

            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {

            fs.unlinkSync(media)

            if (err) return fakegroup(`Err: ${err}`)

            buffer453 = fs.readFileSync(ran)

            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })

            fs.unlinkSync(ran)

            })

            break

    case 'slow':

            if (!isQuotedVideo) return fakegroup('Reply videonya!')

            fakegroup(mess.wait)

            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

            media = await hexa.downloadAndSaveMediaMessage(encmedia)

            ran = getRandom('.mp4')

            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {

            fs.unlinkSync(media)

            if (err) return fakegroup(`Err: ${err}`)

            buffer453 = fs.readFileSync(ran)

            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })

            fs.unlinkSync(ran)

            })

            break

    case 'reverse':

            if (!isQuotedVideo) return fakegroup('Reply videonya!')

            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

            media = await hexa.downloadAndSaveMediaMessage(encmedia)

            ran = getRandom('.mp4')

            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {

            fs.unlinkSync(media)

            if (err) return fakegroup(`Err: ${err}`)

            buffer453 = fs.readFileSync(ran)

            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })

            fs.unlinkSync(ran)

            })

            break

    case 'anime':

            reply(mess.wait)

            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')

            .then(res => res.text())

            .then(body => {

            let tod = body.split("\n");

            let pjr = tod[Math.floor(Math.random() * tod.length)];

            imageToBase64(pjr)

            .then((response) => {

            media =  Buffer.from(response, 'base64');

            hexa.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})

            }

            )

            .catch((error) => {

            console.log(error); 

            }

            )

            });

            break

    case 'kontak':

            pe = args.join(' ') 

            entah = pe.split('|')[0]

            nah = pe.split('|')[1]

            if (isNaN(entah)) return reply('Invalid phone number');

            vcard = 'BEGIN:VCARD\n'

            + 'VERSION:3.0\n'

            + `FN:${nah}\n`

            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`

            + 'END:VCARD'.trim()

            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)

            break    

    case 'take':

    case 'colong':

    		if (!isQuotedSticker) return reply('fotoer aja om')

            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

		    media = await hexa.downloadAndSaveMediaMessage(encmedia)

            anu = args.join(' ').split('|')

            satu = anu[0] !== '' ? anu[0] : `SELF`

            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`

            require('./lib/fetcher.js').createExif(satu, dua)

			require('./lib/fetcher.js').modStick(media, hexa, mek, from)

			break

	case 'fotoerwm':

	case 'stickerwm':

    case 'swm':

            pe = args.join('')

            var a = pe.split("|")[0];

            var b = pe.split("|")[1];

            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {

            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

             media = await hexa.downloadAndSaveMediaMessage(encmedia)

            await createExif(a,b)

            out = getRandom('.webp')

            ffmpeg(media)

            .on('error', (e) => {

            console.log(e)

            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })

            fs.unlinkSync(media)

            })

            .on('end', () => {

            _out = getRandom('.webp')

            spawn('webpmux', ['-set','exif','./foto/data.exif', out, '-o', _out])

            .on('exit', () => {

            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })

            fs.unlinkSync(out)

            fs.unlinkSync(_out)

            fs.unlinkSync(media)

            })

            })

            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

            .toFormat('webp')

            .save(out) 

            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {

            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

            const media = await hexa.downloadAndSaveMediaMessage(encmedia)

            pe = args.join('')

            var a = pe.split("|")[0];

            var b = pe.split("|")[1];

            await createExif(a,b)

            out = getRandom('.webp')

            ffmpeg(media)

            .on('error', (e) => {

            console.log(e)

            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })

            fs.unlinkSync(media)

            })

            .on('end', () => {

            _out = getRandom('.webp')

            spawn('webpmux', ['-set','exif','./foto/data.exif', out, '-o', _out])

            .on('exit', () => {

            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })

            fs.unlinkSync(out)

            fs.unlinkSync(_out)

            fs.unlinkSync(media)

            })

            })

            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

            .toFormat('webp')

            .save(out)       

            } else {

            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)

            }

            break

    case 'upswteks':

            if (!q) return fakestatus('Isi teksnya!')

            hexa.sendMessage('status@broadcast', `${q}`, extendedText)

            fakegroup(`Sukses Up story wea teks ${q}`)

            break

    case 'upswimage':

            if (isQuotedImage) {

            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            cihcih = await hexa.downloadMediaMessage(swsw)

            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })

            bur = `Sukses Upload Story Image dengan Caption: ${q}`

            hexa.sendMessage(from, bur, text, { quoted: mek })

            } else {

            fakestatus('Reply gambarnya!')

            }

            break

    case 'upswvideo':

            if (isQuotedVideo) {

            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            cihcih = await hexa.downloadMediaMessage(swsw)

            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 

            bur = `Sukses Upload Story Video dengan Caption: ${q}`

            hexa.sendMessage(from, bur, text, { quoted: mek })

            } else {

            fakestatus('reply videonya!')

            }

            break

    case 'fdeface':

            ge = args.join('')           

            var pe = ge.split("|")[0];

            var pen = ge.split("|")[1];

            var pn = ge.split("|")[2];

            var be = ge.split("|")[3];

            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`

            if (args.length < 1) return reply (fde)

            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        

            const bufer = fs.readFileSync(tipes)

            const desc = `${pn}`

            const title = `${pen}`

            const url = `${pe}`

            const buu = `https://${be}`

    		var anu = {

        	detectLinks: false

    		}

    		var mat = await hexa.generateLinkPreview(url)

    		mat.title = title;

    		mat.description = desc;

    		mat.jpegThumbnail = bufer;

   			mat.canonicalUrl = buu; 

    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)

            break

    case 'public':

          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')

          	if (banChats === false) return

          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]

          	banChats = false

          	fakestatus(`「 *PUBLIC-MODE* 」`)

          	break

	case 'self':

          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')

          	if (banChats === true) return

          	uptime = process.uptime()

         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]

         	banChats = true

          	fakestatus(`「 *SELF-MODE* 」`)

          	break

 	case 'hidetag':

			if (!mek.key.fromMe) return fakestatus('SELF-BOT')

			if (!isGroup) return reply(mess.only.group)

			var value = args.join(' ')

			var group = await hexa.groupMetadata(from)

			var member = group['participants']

			var mem = []

			member.map(async adm => {

			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

			})

			var optionshidetag = {

			text: value,

			contextInfo: { mentionedJid: mem },

			quoted: mek

			}

			hexa.sendMessage(from, optionshidetag, text)

			break

    case 'sticker':

	case 'stiker':

    case 's':

				if (isMedia && !mek.message.videoMessage || isQuotedImage) {

				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

				const media = await hexa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)

				await ffmpeg(`${media}`)

						.input(media)

						.on('start', function (cmd) {

						console.log(`Started : ${cmd}`)

					})

					.on('error', function (err) {

						console.log(`Error : ${err}`)

						fs.unlinkSync(media)

						reply(from, mess.error.api, mek)

					})

							.on('end', function () {

							console.log('Finish')

						   exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {

					if (error) return reply(from, mess.error.api, mek)

						   sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)

							fs.unlinkSync(media)	

							fs.unlinkSync(`./sticker/${sender}.webp`)	

						})

				})

					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

					.toFormat('webp')

					.save(`./sticker/${sender}.webp`)

	} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {

					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

					const media = await hexa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)

					reply(from, mess.wait, mek)

					await ffmpeg(`${media}`)

					.inputFormat(media.split('.')[4])

					.on('start', function (cmd) {

					console.log(`Started : ${cmd}`)

				    })

					.on('error', function (err) {

					console.log(`Error : ${err}`)

					fs.unlinkSync(media)

					tipe = media.endsWith('.mp4') ? 'video' : 'gif'

					reply(from, mess.error.api, mek)

					})

					    .on('end', function () {

						console.log('Finish')

						exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {

						if (error) return reply(from, mess.error.api, mek)

						sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)

						fs.unlinkSync(media)

						fs.unlinkSync(`./sticker/${sender}.webp`)

				    })

				})

					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

					.toFormat('webp')

					.save(`./sticker/${sender}.webp`)

			} else {

				reply(from, `Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, mek)

			}

	break

    case 'toimg':

			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')

			reply(mess.wait)

			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

			media = await hexa.downloadAndSaveMediaMessage(encmedia)

			ran = getRandom('.png')

			exec(`ffmpeg -i ${media} ${ran}`, (err) => {

			fs.unlinkSync(media)

			if (err) return reply('Yah gagal, coba ulangi ^_^')

			buffer = fs.readFileSync(ran)

			fakethumb(buffer,'NIH')

			fs.unlinkSync(ran)

			})

			break

	case 'ytsearch':

			if (args.length < 1) return reply('Tolong masukan query!')

			var srch = args.join('');

			try {

        	var aramas = await yts(srch);

   			} catch {

        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)

    		}

    		aramat = aramas.all 

    		var tbuff = await getBuffer(aramat[0].image)

    		var ytresult = '';

    		ytresult += '「 *YOUTUBE SEARCH* 」'

    		ytresult += '\n________________________\n\n'

   			aramas.all.map((video) => {

        	ytresult += '❏ Title: ' + video.title + '\n'

            ytresult += '❏ Link: ' + video.url + '\n'

            ytresult += '❏ Durasi: ' + video.timestamp + '\n'

            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'

    		});

    		ytresult += '◩ *SELF-BOT*'

    		await fakethumb(tbuff,ytresult)

			break

	case 'setreply':

	case 'setfake':

			if (!q) return fakegroup(mess.wrongFormat)

			fake = q

			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)

			break

	case 'setfakeimg':

        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {

          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

			delb = await hexa.downloadMediaMessage(boij)

			fs.writeFileSync(`./foto/fake.jpeg`, delb)

			fakestatus('Sukses')

        	} else {

            reply(`Kirim gambar dengan caption ${prefix}sethumb`)

          	}

			break	

	case 'setthumb':

	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {

          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

			delb = await hexa.downloadMediaMessage(boij)

			fs.writeFileSync(`./foto/thumb.jpeg`, delb)

			fakestatus('Sukses')

        	} else {

            reply(`Kirim gambar dengan caption ${prefix}sethumb`)

          	}

			break	

	

	case 'emoji':

			if (!q) return fakegroup('emojinya?')

			qes = args.join(' ')

			emoji.get(`${qes}`).then(emoji => {

			teks = `${emoji.images[4].url}`

    		sendStickerFromUrl(from,`${teks}`)	

    		console.log(teks)

   			})

    		break


    case 'ig':

        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)

        if (!q) return fakegroup('Linknya?')

        reply(mess.wait)

	    hx.igdl(args[0])

	    .then(async(result) => {

            for(let i of result.medias){

                if(i.url.includes('mp4')){

                    let link = await getBuffer(i.url)

                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})

                } else {

                    let link = await getBuffer(i.url)

                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  

                }

            }

            });

	    break

    case 'igstalk':

            if (!q) return fakegroup('Usernamenya?')

            ig.fetchUser(`${args.join(' ')}`).then(Y => {

            console.log(`${args.join(' ')}`)

            ten = `${Y.profile_pic_url_hd}`

            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`

            sendMediaURL(from,ten,teks) 

            })      

            break    

    

    case 'join':

            try {

            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)

            hen = args[0]

            if (!q) return fakestatus('Masukan link group')

            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]

            if (!codeInvite) return fakegroup ('pafotoan link sudah benar!')

            var response = await hexa.acceptInvite(codeInvite)

            fakestatus('SUKSES')

            } catch {

            fakegroup('LINK ERROR!')

            }

            break

   
    case 'runtime':

    case 'test':

            run = process.uptime() 

            teks = `${kyun(run)}`

            fakegroup(teks)

            break  

	case 'speed':

	case 'ping':

			const timestamp = speed();

			const latensi = speed() - timestamp

			exec(`neofetch --stdout`, (error, stdout, stderr) => {

			const child = stdout.toString('utf-8')

			const teks = child.replace(/Memory:/, "Ram:")

			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`

			fakegroup(pingnya)

			})

			break  

    case 'totag':

            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {

            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())

            value = args.join(" ")

            var group = await hexa.groupMetadata(from)

            var member = group['participants']

            var mem = []

            member.map(async adm => {

            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

            })

            var options = {

                contextInfo: { mentionedJid: mem },

                quoted: mek

            }

            ini_buffer = fs.readFileSync(file)

            hexa.sendMessage(from, ini_buffer, sticker, options)

            fs.unlinkSync(file)

            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())

            value = args.join(" ")

            var group = await hexa.groupMetadata(from)

            var member = group['participants']

            var mem = []

            member.map(async adm => {

            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

            })

            var options = {

                contextInfo: { mentionedJid: mem },

                quoted: mek

            }

            ini_buffer = fs.readFileSync(file)

            hexa.sendMessage(from, ini_buffer, image, options)

            fs.unlinkSync(file)

        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {

            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())

            value = args.join(" ")

            var group = await hexa.groupMetadata(from)

            var member = group['participants']

            var mem = []

            member.map(async adm => {

            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

            })

            var options = {

                mimetype : 'audio/mp4',

                ptt : true,

                contextInfo: { mentionedJid: mem },

                quoted: mek

            }

            ini_buffer = fs.readFileSync(file)

            hexa.sendMessage(from, ini_buffer, audio, options)

            fs.unlinkSync(file)

        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {

            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())

            value = args.join(" ")

            var group = await hexa.groupMetadata(from)

            var member = group['participants']

            var mem = []

            member.map(async adm => {

            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

            })

            var options = {

                mimetype : 'video/mp4',

                contextInfo: { mentionedJid: mem },

                quoted: mek

            }

            ini_buffer = fs.readFileSync(file)

            hexa.sendMessage(from, ini_buffer, video, options)

            fs.unlinkSync(file)

        } else{

          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)

        }

        break

    case 'tomp4':

            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {

            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            owgi = await hexa.downloadAndSaveMediaMessage(ger)

            webp2mp4File(owgi).then(res=>{

            sendMediaURL(from,res.result,'Done')

            })

            }else {

            reply('reply fotoer')

            }

            fs.unlinkSync(owgi)

            break

    case 'tourl':

            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {

            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

            owgi = await hexa.downloadMediaMessage(boij)

            res = await upload(owgi)

            reply(res)

            } else {

            reply('kirim/reply gambar/video')

            }

            break	

    case 'inspect':

            try {

            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)

            if (!q) return reply('masukan link wa')

            cos = args[0]

            var net = cos.split('https://chat.whatsapp.com/')[1]

            if (!net) return reply('pafotoan itu link https://whatsapp.com/')

            jids = []

            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 

            json: ["query", "invite",net],

            expect200:true })

            let par = `*Id* : ${id}

${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}

*Nama Gc* : ${subject}

*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}

*Jumlah Member* : ${size}

${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}

*Id desc* : ${descId}

${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`

           for ( let y of participants) {

             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`

             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)

             }

             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)

             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)

             hexa.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})

             } catch {

             reply('Link error')

             }

             break

default:

if (budy.startsWith('x')){

try {

return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})

} catch(err) {

e = String(err)

reply(e)

}

}  



	}

if (isGroup && budy != undefined) {

	} else {

	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)

	}

}





	

    
