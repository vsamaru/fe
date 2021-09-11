import './6cc'
import { json, error, missing, ThrowableRouter, withContent, withParams } from './itty-router-extras'

const tgph = require('./tg.ph')


router.post('/', withContent, async ({ content }) => {

    var re = content
    B = {
        method: "sendMessage",
        chat_id: 465081843,
        text: content,
        reply_markup: {
            inline_keyboard: [
                [{
                    "text": "▶️",
                    "switch_inline_query_current_chat": ""
                }, {
                    "text": "➖",
                    "switch_inline_query_current_chat": "-"
                }, {
                    "text": "➕",
                    "switch_inline_query_current_chat": "+"
                }, {
                    "text": "/",
                    "switch_inline_query_current_chat": "\\"
                }, {
                    "text": "👁‍🗨",
                    "switch_inline_query": ""
                }]
            ]
        }
    }

 if (re.photo) {
 	await  tgph(["50.4825,30.4887","FEEE FUUU","https://i.ibb.co/whfQZbG/file-193.jpg"])
 }

    if (re.type === "inline_query") {
        var A = ''
        var rrr = re.query.split("\n")
        if (rrr[1]) {
            A = []
            rrr.map(e => {
                var o = {}
                o.type = "photo"
                o.title = e.replace("ibb", "i.ibb") + "/i.png"
                o.id = e.replace("ibb", "i.ibb") + "/i.png"
                o.thumb_url = e.replace("ibb", "i.ibb") + "/i.png"
                o.caption = e.replace("ibb", "i.ibb") + "/i.png"
                o.photo_url = e.replace("ibb", "i.ibb") + "/i.png"
                if (e.includes("ibb")) A.unshift(o)
            })
        }
        B.method = 'answerInlineQuery'
        B.inline_query_id = re.id
        B.is_personal = true
        B.cache_time = 0
        B.results = A || [] 
    }
    return new Response(
        JSON.stringify(B, null, 4), {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
    )
})