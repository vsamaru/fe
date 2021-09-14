// import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
//import './6cc'
import { json, error, missing, ThrowableRouter, withContent, withParams } from './index'
// import './handler'
import { render } from 'posthtml-render'
// import { bot } from '../bot'

var t = {"v":"1983882105:AAH9MS7vEMaGMWoP3XCby9kvvBogLSpfTL8","c":"1925673169:AAFHmM0G3lEaL8js_At76cciFk4VRXq62MU","o":"706378399:AAFMlm63OEqDOU6GvLI-m1msD8fUqJ4XMkA","q":"1453699653:AAHDfkzpMIR1omFnz5ha1FtzYY4f47TDLSk","r":"898353069:AAGp5H7zHEdhjOjMF7oOQLU03DF3tYGFx0o","k":"871266562:AAFjM1YBCgOk64ajgm5n8JIjEVQNGVkOUBs"}

// async function handleEvent(event) {
//   try {
//     const page = await getAssetFromKV(event, {})
    
//     const response = new Response(page.body, page)
//     response.headers.set("Cache-Control", "max-age=1500")
//     response.headers.set('Access-Control-Allow-Origin', '*')
//     return response
//   } catch (e) {
//     console.error(e)
//     return new Response({ status: 200 })
//   }
// }
// const config = /** @type {ConfigDef} */ require('../config.json')
// const { handleEvent } = require('./handler')
// /*global addEventListener*/
// addEventListener('fetch', async (event) => {
//   handleEvent(event, config)
// })
var todos = [
  { id: '13', value: 'foo' },
  { id: '14', value: 'bar' },
  { id: '15', value: 'baz' },
]
var router = ThrowableRouter()
// GET collection index
router.get('/l/:id', withParams, ({ id }) => {
    //console.log(withParams())
  var todo = todos.find(t => t.value === id)
console.log(todo)
   return new Response( {
        status: 200
      })
  // return todo
  // ? json(todo)
  // : missing(id)
})
router.get('/_', async re =>  {

     const getFireStoreProp = value => {
  const props = { 'arrayValue': 1, 'bytesValue': 1, 'booleanValue': 1, 'doubleValue': 1, 'geoPointValue': 1, 'integerValue': 1, 'mapValue': 1, 'nullValue': 1, 'referenceValue': 1, 'stringValue': 1, 'timestampValue': 1 }
  return Object.keys(value).find(k => props[k] === 1)
}
var Fi = value => {
  const prop = getFireStoreProp(value)

  if (prop === 'doubleValue' || prop === 'integerValue') {
    value = Number(value[prop])
  }
  else if (prop === 'arrayValue') {
    value = (value[prop] && value[prop].values || []).map(v => Fi(v))
  }
  else if (prop === 'mapValue') {
    value = Fi(value[prop] && value[prop].fields || {})
  }
  else if (prop === 'geoPointValue') {
    value = { latitude: 0, longitude: 0, ...value[prop] }
  }
  else if (prop) {
    value = value[prop]
  }
  else if (typeof value === 'object') {
    Object.keys(value).forEach(k => value[k] = Fi(value[k]))
  }
  // console.log(JSON.stringify(value,null,4))
//value = value.map(e=>e=e.document.fields)
  return value
}

  re = await fetch(`https://firestore.googleapis.com/v1/projects/i----i/databases/(default)/documents/:runQuery`, {
      method: 'POST',
      body: JSON.stringify({
        "structuredQuery": { 
          "where": {
            "fieldFilter": {
              "field": {
                "fieldPath": "set"
              },
              "op": "EQUAL",
              "value": {
                "stringValue": "neRa"
              }
            }
          },
          "orderBy": [{
            "field": {
              "fieldPath": "day"
            },
            "direction": "DESCENDING"
          }],
          "from": {
            "collectionId": "$"
          },
          "limit": 1
        }
      })
    })
    .then(response => response.json())
    .then(json => Fi(json))
    .then(value => {
    return value.map(e=>e=e.document.fields)
      
    //       const type = Object.keys(value)[0];
    // // Replace the firebase raw value, with actual value inside of it.
    // value = value[type];
          //      results = results.map((result) => new Document(result.document, this.parent.db));
          // results = JSON.parse(JSON.stringify(results))
            //  console.log(results)
     // console.log(JSON.stringify(value,null,4))
    })
  
     return new Response(
     JSON.stringify(re, null, 4), {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }
    )
})
router.get('/x', async re =>  {

  TOKEN = re.query.t

                  re.photo = await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + re.query.id)
                    .then(r => r.json())
                    .then(async r => {
                        re.file = r.result.file_path.split("file_")[1].split(".")[0]
                        // X.file = re.file
                        return 'https://api.telegram.org/file/bot' + TOKEN + '/' + r.result.file_path
                    })
                  
                // if (re.caption) {
                //     re.caption = re.caption.toUpperCase()
                // } else {
                //     re.caption = "ПО-СТРЕЛКЕ"
                // }
                var i = "-" + Date.now()
                re.photo = `https://res.cloudinary.com/o6/image/upload/c_scale,w_1280/b_${re.query.cc},co_black,l_text:Yanone%20Kaffeesatz_42_bold_center:%20${re.query.ll.replace(/,/g, "%20") + "%20" + re.query.ref}%20${re.query.cap.replace(/ /g, "%20")}%20,fl_relative,w_1,y_1.01,g_south/l_v:${re.query.n}${re.file},fl_relative,w_1,y_1.01,g_south/${re.query.geo}`
 
          re.photo = await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?public_id=${re.query.n}${re.file}&upload_preset=o6oooo&file=${encodeURIComponent(re.photo)}`).then(r => r.json()).then(r => {
                    return "https://res.cloudinary.com/o6/"+r.public_id
                })
     return new Response(
     JSON.stringify(re.photo, null, 4), {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }
    )
})
// router.get('/:x', async ({ params }) =>  {

//     //var h = ``
//     // var v = await OV.get(String(params.id))
//              const image = await fetch(`https://api.telegram.org/file/bot901631976:AAEZ92ShN9zMswAG2or2VlGmJrxJaEsgP_8/photos/file_${params.id}.jpg`)
          
//             const {
//                 readable,
//                 writable
//             } = new TransformStream()
//             image.body.pipeTo(writable)
//             const r = new Response(readable, image)
//             r.headers.set('Cache-Control', 'max-age=1500')
//             return r
// })

router.get('/i/:id', async ({ params }) =>  {

    var e = params.id.slice(0,1)
     var c = params.id.slice(1)
    
    const image = await fetch(`https://api.telegram.org/file/bot${t[e]}/photos/file_${c}.jpg`)
          
            const {
                readable,
                writable
            } = new TransformStream()
            image.body.pipeTo(writable)
            const r = new Response(readable, image)
            r.headers.set('Cache-Control', 'max-age=1500')
            return r
})
// GET item
// router.put('/', async re => {
//    // console.warn(request)
//     return await E.upd( await re.json()).then( r => new Response( { status: 200 }) )
// })
// POST to the collection (we'll use async here)
router.post('/', withContent, ({ content }) => {
 var re = content
  
         B = {
        method: "sendMessage",
        chat_id: 465081843,
        text: content,
                    reply_markup: {
                inline_keyboard: [
                    [ {
                        "text": "▶️",
                        "switch_inline_query_current_chat": ""
                    },{
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
       //"CQACAgIAAxkBAAIJlWD-O_pwjcvtGnCmr-MG_kziHH9EAAJ6DgAClhvxSxS-7JqAavFQIAQ"//
     
    }
   
            if (re.type === "inline_query") {
            var A = ''
            var rrr = re.query.split("\n")
            if(rrr[1]){
                A = []
            rrr.map(e=>{
                var o = {}
                o.type = "photo"

                o.title = e.replace("ibb","i.ibb")+"/i.png"
                o.id = e.replace("ibb","i.ibb")+"/i.png"
                o.thumb_url = e.replace("ibb","i.ibb")+"/i.png"
                o.caption = e.replace("ibb","i.ibb")+"/i.png"
                o.photo_url = e.replace("ibb","i.ibb")+"/i.png"
                if(e.includes("ibb")) A.unshift(o)
        })

        }

            B.method = 'answerInlineQuery'
            B.inline_query_id = re.id
            B.is_personal = true
            B.cache_time = 0

            B.results = A || []//(await db.list(re))
        }
  //_posts = await OV.get("X").then(r=>pa(r))
  
    
  // await E.set(re)

  
 //  try {

 // await E.upd(await req.json())



  


 //  } catch (error) {
 //    console.error(error)
 
 //  }
 //    finally {

 // await bot(await req2.json())
 

  


 //  } 
 

//    _posts.unshift(  _p[Math.floor(Math.random() * _p.length)])

// console.log(_posts)   

// function getUniqueListBy(arr, key) {
//     return [...new Map(arr.map(item => [item[key], item])).values()]
// }

// _posts = getUniqueListBy(_posts, 'pic')

// await OV.put("X",JSON.stringify(_posts))
  // return new Response({
  //     status: 200})
     return new Response(
     JSON.stringify(B, null, 4), {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }
    )
})

var H = (x,y,z,f) => `<!DOCTYPE html>
<head>

    <meta property="og:site_name" content="${y}">
    <meta property="og:title" content="${f}">
    <meta property="og:description" content="${Date.now()}">
    <meta property="og:image" content="${z}">
 <meta data-rh="true" property="al:android:app_name" content="Medium" />
    <meta property="article:published_time" content="2020-02-03T23:10:04.654Z">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Yanone+Kaffeesatz" />
<style>
* {
      clear: both; 
    text-align: center; 
    margin-left: auto; 
    margin-right: auto;
  background-color: #222;

}

figure {

      
 
 
    padding-bottom: 13%; 
    padding-top: 2%;    
    box-sizing: border-box; 
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;

min-height: 100%; 
    width: auto;
    display: flex;
    flex-flow: column;
    margin: auto;
    align: center;
}

img {
     width: 960px;
}

figcaption {
  
    color: #fff;
    font-family: "Yanone Kaffeesatz";
    text-align: center;
}
</style>
</head>
<body>
    <div class="article">
           <article class="article__content">
         
${x}


</article>
    </div>
</body>
</html>`
// 404 for everything else
router.all('*', async () => {

function getRandomInt(max) {
max = max || 10000
  return Math.floor(Math.random() * max);
}
var geo = () => `50.4${getRandomInt()},30.6${getRandomInt()}`
geo = geo()
  var lll = await fetch("https://www.mapquestapi.com/geocoding/v1/reverse?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&location="+geo)
    .then( r => r.json() )
  .then( r => r.results[0].locations[0].street.replace(/вулиця/gi,'').replace(/проспект/gi,'').trim())
  lll = await lll
var rr = () => `https://www.mapquestapi.com/staticmap/v5/map?banner=%20${geo}%20${lll}%20|000000-7effd4-sm-top&locations=${geo}|marker-lg-black-${"aquamarine"}-${"A"}&zoom=18&size=640,170@2x&key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=sat`

var v = await fetch(`https://i----i.firebaseio.com/*/.json`).then(r => r.json()).then(r => Object.values(r || []))
var w = await v[0].url
//console.log(w)
v = await v.map(e=>`<img src="${e.url}"><figcaption>${e.id}</figcaption>`)
const tree = []

const node = {}

node.tag = 'figure'
// node.attrs = { class: 'article__content' }
node.content = v.map((content) => ( {tag:"div",content} ))



tree.push(node)

const html = render(tree, {})

return new Response(H(html,v.length,w,lll), {
        headers: {
             'Content-Type': 'text/html;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            "Cache-Control": "max-age=0"
        }
    })
})
// attach the router "handle" to the event handler
// addEventListener('fetch', event =>{
//     var { pathname } = new URL(event.request.url)
//     pathname = pathname.replace("/", "")
// //if (event.request.method === 'GET' && !pathname) return event.respondWith(handleEvent(event).catch(err => console.error(err)))
// // console.log(event)
// //   L=L.length>0?L:"one"
// //   LL=LL.length>0?LL:"two"
// //   console.log(L,LL)
// // var request = event.request
// //   request.ev = event
//   event.respondWith(router.handle(event.request).catch(err => console.error(err)))
// }
// )

// var str = (j=[]) => { try { j = JSON.stringify(JSON.parse(j), null, 4) } catch (err) { j = JSON.stringify(j, null, 4)} return j }

// var pa = j => { 
//   try { return JSON.parse(JSON.stringify(j)) } 
//   catch (err) { return j } 
   
// }
export default router.handle
var pa = j => 
{
    try { j = JSON.parse(j) } catch (err) {} return j || []
}
var str = (j=[]) => {
    try {
        j = JSON.stringify(JSON.parse(j), null, 4)
    } catch (err) {
        j = JSON.stringify(j, null, 4)
    }
    return j
}

