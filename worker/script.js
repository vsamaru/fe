/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={...__webpack_require__(8),...__webpack_require__(2),...__webpack_require__(16),...__webpack_require__(19)};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const{createResponseType:createResponseType}=__webpack_require__(12),json=createResponseType("application/json; charset=utf-8");module.exports={json:json};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={...__webpack_require__(3),...__webpack_require__(1),...__webpack_require__(13),...__webpack_require__(14),...__webpack_require__(15)};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const{json:json}=__webpack_require__(1),error=(r=500,o="Internal Server Error.")=>json({..."object"==typeof o?o:{status:r,error:o}},{status:r});module.exports={error:error};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var I=Object.defineProperty,U=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var g=(o,r,n)=>r in o?I(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,b=(o,r)=>{for(var n in r||(r={}))j.call(r,n)&&g(o,n,r[n]);if(N)for(var n of N(r))v.call(r,n)&&g(o,n,r[n]);return o},R=(o,r)=>U(o,_(r));var _isjson = __webpack_require__(21); var _isjson2 = _interopRequireDefault(_isjson);var $;(function(s){s[s.Smart=0]="Smart",s[s.Single=1]="Single",s[s.Double=2]="Double"})($||($= exports.quoteStyleEnum ={}));var d;(function(c){c.tag="tag",c.slash="slash",c.default="default",c.closeAs="closeAs"})(d||(d= exports.closingSingleTagOptionEnum ={}));var i;(function(s){s.tag="tag",s.slash="slash",s.default="default"})(i||(i= exports.closingSingleTagTypeEnum ={}));var y=["area","base","br","col","command","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],L=/[\t\n\f\r "'`=<>]/,B={closingSingleTag:void 0,quoteAllAttributes:!0,replaceQuote:!0,quoteStyle:2};function q(o,r={}){var x;let n=y;r.singleTags&&(n=[...new Set([...y,...r.singleTags])]),r=R(b(b({},B),r),{singleTags:n});let{singleTags:s,closingSingleTag:c,quoteAllAttributes:k,replaceQuote:Q,quoteStyle:p}=r,h=(x=s==null?void 0:s.filter(a=>a instanceof RegExp))!=null?x:[];return Array.isArray(o)||(o||(o=""),o=[o]),u(o);function u(a){let t="";for(let e of a){if(e===!1||e===void 0||e===null||typeof e=="string"&&e.length===0||Number.isNaN(e))continue;if(Array.isArray(e)){if(e.length===0)continue;t+=u(e);continue}if(typeof e=="string"||typeof e=="number"){t+=e;continue}if(Array.isArray(e.content)||(e.content||(e.content=""),e.content=[e.content]),e.tag===!1){t+=u(e.content);continue}let f=typeof e.tag=="string"?e.tag:"div";t+=`<${f}`,e.attrs&&(t+=w(e.attrs));let l={[i.tag]:`></${f}>`,[i.slash]:" />",[i.default]:">"};if(m(f)){switch(c){case d.tag:t+=l[i.tag];break;case d.slash:t+=l[i.slash];break;case d.closeAs:t+=l[e.closeAs?i[e.closeAs]:i.default];break;default:t+=l[i.default]}e.content&&(t+=u(e.content))}else if(c===d.closeAs&&e.closeAs){let D=e.closeAs?i[e.closeAs]:i.default;t+=`${l[D]}${u(e.content)}`}else t+=`>${u(e.content)}</${f}>`}return t}function m(a){return h.length>0?h.some(t=>t.test(a)):!!(s==null?void 0:s.includes(a.toLowerCase()))}function w(a){let t="";for(let[e,f]of Object.entries(a))if(typeof f=="string")if(_isjson2.default.call(void 0, f))t+=A(e,f);else if(k||L.test(f)){let l=f;Q&&(l=f.replace(/"/g,"&quot;")),t+=A(e,l,p)}else f===""?t+=` ${e}`:t+=` ${e}=${f}`;else f===!0?t+=` ${e}`:typeof f=="number"&&(t+=A(e,f,p));return t}function A(a,t,e=1){return e===1?` ${a}='${t}'`:e===2?` ${a}="${t}"`:typeof t=="string"&&t.includes('"')?` ${a}='${t}'`:` ${a}="${t}"`}}exports.closingSingleTagOptionEnum = d; exports.closingSingleTagTypeEnum = i; exports.quoteStyleEnum = $; exports.render = q;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _6cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _6cc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_6cc__WEBPACK_IMPORTED_MODULE_0__);


const router = __webpack_require__(7)

async function fetchAndApply(re) {

  try {

    return await router(re.request).catch(err => console.error(err))
  } catch (err) {
 console.error(err)
    return new Response(err.message)
  }
}


addEventListener('fetch', (event) => {
  event.respondWith(fetchAndApply(event));
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

globalThis.O = {}
O = new Proxy(O, {
    get: (e, o) => (...l) => {
        return l.map((l, i) => {
            chat = -1001161709623
            T = "989543891:AAH7DMWagamQIi0ogmQy7_AuovMP_Ic6T7M"
            switch (o) {
                case "dir":
                    TT = (-1 * Number(String(Date.now() / 1000)).toFixed(0)) - i
                    fetch(`https://iiilll.firebaseio.com/${TT}.json`, {
                        method: 'PUT',
                        body: JSON.stringify(l)
                    }).then(r => r.json()).then(r => l = r)
                    break;
                case "error":
                    chat = -1001433099398
                    l = l.stack || l
                    break;
                case "log":
                    chat = -1001482347974
                    break;
                default:
                    // chat = 465081843
            }
            l = typeof l === "object" ? JSON.stringify(l, null, 4) : l
            l = String(l).substring(0, 4090)
            fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${encodeURIComponent(l)}`)
                .then(r => r.json())
                .then(r =>
                    r.description ? fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${r.description}`) : ''
                )
            if (o === "error") new Response({
                status: 200
            })
        })
    }
})

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var posthtml_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var posthtml_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(posthtml_render__WEBPACK_IMPORTED_MODULE_1__);
// import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
//import './6cc'

// import './handler'

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
var router = Object(_index__WEBPACK_IMPORTED_MODULE_0__["ThrowableRouter"])()
// GET collection index
router.get('/l/:id', _index__WEBPACK_IMPORTED_MODULE_0__["withParams"], ({ id }) => {
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
router.post('/', _index__WEBPACK_IMPORTED_MODULE_0__["withContent"], ({ content }) => {
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

const html = Object(posthtml_render__WEBPACK_IMPORTED_MODULE_1__["render"])(tree, {})

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
/* harmony default export */ __webpack_exports__["default"] = (router.handle);
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



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={...__webpack_require__(9),...__webpack_require__(10),...__webpack_require__(11)};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

const withContent = async t => {
	let n = t.headers.get("content-type");
	t.content = void 0;
	try {
		t.content = await t.json()
        t.type = Object.keys(t.content)[1]
        t.content = t.content[t.type]
        t.content.type = t.type
        t.content.from = t.content.chat || t.content.from
        t.content.chat = t.content.from.id
        t.content.from = t.content.from.username || t.content.from.title || t.content.from.first_name
                                    if (t.content.text && t.content.text.startsWith("{")) {
                t.content.obj = JSON.parse(t.content.text)
                delete t.content.text
            }
                        if (t.content.text && !isNaN(t.content.text)) {
              
                t.content.num = Number(t.content.text)
                delete t.content.text
            }
                if (t.content.entities && t.content.text) {
            t.content.entities.forEach((element) => {
                if (element.type === "text_link") {
                    t.content.url = element.url
                } else {
                   t.content[element.type] = t.content.text.substring(element.offset, (element.offset + element.length))
                    if (t.content.text === t.content[element.type]) {
                        delete t.content.text
                    }
                }
            })
           
        }
         delete t.content.entities
         t.content.o =  await fetch("https://o6o.o6.workers.dev/_").then( r => r.json() )
		n && n.includes("application/json") && (t.content)
	} catch (t) {}
};
module.exports = {
	withContent: withContent
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

const withCookies=o=>{o.cookies={};try{o.cookies=(o.headers.get("Cookie")||"").split(/;\s*/).map(o=>o.split("=")).reduce((o,[e,i])=>(o[e]=i,o),{})}catch(o){}};module.exports={withCookies:withCookies};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

const withParams=a=>{for(const s in a.params||{})a[s]=a.params[s]};module.exports={withParams:withParams};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

const createResponseType=(e="text/plain; charset=utf-8")=>(s,t={})=>{const{headers:n={},...o}=t;return"object"==typeof s?new Response(JSON.stringify(s),{headers:{"Content-Type":e,...n},...o}):new Response(s,t)};module.exports={createResponseType:createResponseType};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const{error:error}=__webpack_require__(3),missing=(r="Not found.")=>error(404,r);module.exports={missing:missing};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const{json:json}=__webpack_require__(1),status=(s,t)=>t?json({..."object"==typeof t?t:{status:s,message:t}},{status:s}):new Response(null,{status:s});module.exports={status:status};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

const text=(e,t={})=>new Response(e,t);module.exports={text:text};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={...__webpack_require__(17)};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const{Router:Router}=__webpack_require__(18),{error:error}=__webpack_require__(2),ThrowableRouter=(r={})=>{const{stack:e=!1}=r;return new Proxy(Router(r),{get:(r,t)=>(...o)=>"handle"===t?r[t](...o).catch(r=>error(r.status||500,{status:r.status||500,error:r.message,stack:e&&r.stack||void 0})):r[t](...o)})};module.exports={ThrowableRouter:ThrowableRouter};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

const Router = ({ base = '', routes = [] } = {}) => ({
  __proto__: new Proxy({}, {
    get: (t, k, c) => (p, ...H) =>
      routes.push([
        k.toUpperCase(),
        RegExp(`^${(base + p)
          .replace(/(\/?)\*/g, '($1.*)?')
          .replace(/\/$/, '')
          .replace(/:(\w+)(\?)?(\.)?/g, '$2(?<$1>[^/]+)$2$3')
          .replace(/\.(?=[\w(])/, '\\.')
        }/*$`),
        H,
      ]) && c
  }),
  routes,
  async handle (q, ...a) {
    let s, m,
        u = new URL(q.url)
    q.query = Object.fromEntries(u.searchParams)
    for (let [M, p, H] of routes) {
      if ((M === q.method || M === 'ALL') && (m = u.pathname.match(p))) {
        q.params = m.groups
        for (let h of H) {
          if ((s = await h(q.proxy || q, ...a)) !== undefined) return s
        }
      }
    }
  }
})

module.exports = { Router }

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={...__webpack_require__(20)};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

class StatusError extends Error{constructor(r=500,t="Internal Error."){super(t),this.name="StatusError",this.status=r}}module.exports={StatusError:StatusError};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = isJSON;
isJSON.strict = strict;

function isJSON (str, pass_object) {
  if (pass_object && isObject(str)) return true;

  if (!isString(str)) return false;

  str = str.replace(/\s/g, '').replace(/\n|\r/, '');

  if (/^\{(.*?)\}$/.test(str))
    return /"(.*?)":(.*?)/g.test(str);

  if (/^\[(.*?)\]$/.test(str)) {
    return str.replace(/^\[/, '')
      .replace(/\]$/, '')
      .replace(/},{/g, '}\n{')
      .split(/\n/)
      .map(function (s) { return isJSON(s); })
      .reduce(function (prev, curr) { return !!curr; });
  }

  return false;
}


function strict (str) {
  if (isObject(str)) {
    return true;
  }

  try {
   return JSON.parse(str) && true;
  } catch (ex) {
    return false;
  }
}

function isString (x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}



/***/ })
/******/ ]);