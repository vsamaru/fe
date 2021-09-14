var o = Object.values({ "ZhwWWJd": { "set": "huqu", "id": "ZhwWWJd", "day": 1629323058144, "no": 1, "is": 0, "by": "papaswin", "meta": { "ref": "На арматуре", "pic": "https://ibb.co/ZhwWWJd", "th": "https://i.ibb.co/ZhwWWJd/i.png", "geo": "50.437059,30.641438", "raw": "https://i.ibb.co/8jR66BM/1.png", "mid": "https://i.ibb.co/SK1RRxN/1.jpg" } }, "8YypQbw": { "set": "huqu", "id": "8YypQbw", "day": 1629143219816, "no": 2, "is": 1, "by": "papaswin", "meta": { "ref": "по-стрелке", "pic": "https://ibb.co/8YypQbw", "th": "https://i.ibb.co/8YypQbw/i.png", "geo": "50.464039,30.697700", "raw": "https://i.ibb.co/XYngGDP/5.jpg", "mid": "https://i.ibb.co/LNTWsry/5.jpg" } }, "VNhHKMN": { "set": "huqu", "id": "VNhHKMN", "day": 1629140726061, "no": 3, "is": 2, "by": "papaswin", "meta": { "ref": "Под полоской", "pic": "https://ibb.co/VNhHKMN", "th": "https://i.ibb.co/VNhHKMN/i.png", "geo": "50.493621,30.624488", "raw": "https://i.ibb.co/qn40Zmn/4.jpg", "mid": "https://i.ibb.co/g7Xvnt7/4.jpg" } }, "QJ3MZRm": { "set": "huqu", "id": "QJ3MZRm", "day": 1629101524013, "no": 4, "is": 2, "by": "papaswin", "meta": { "ref": "На уголке в листве", "pic": "https://ibb.co/QJ3MZRm", "th": "https://i.ibb.co/QJ3MZRm/i.png", "geo": "50.460439,30.642385", "raw": "https://i.ibb.co/rQRHgSy/3.jpg", "mid": "https://i.ibb.co/WH4fQwK/3.jpg" } }, "YLTtSrR": { "set": "huqu", "id": "YLTtSrR", "day": 1629098763151, "no": 5, "is": 0, "by": "papaswin", "meta": { "ref": "Внизу на ржавой рельсе", "pic": "https://ibb.co/YLTtSrR", "th": "https://i.ibb.co/YLTtSrR/i.png", "geo": "50.454657,30.617750", "raw": "https://i.ibb.co/RD4CK5v/2.jpg", "mid": "https://i.ibb.co/BCKgJ1z/2.jpg" } }})
const Telegraph = require('telegra.ph')
const client = new Telegraph('751b987964dec84b049f815b803aae77e30410d271041bcc827502dbe149')
// ph.createAccount('hi', {short_name: 'WhiteWhidow', author_name: 'LB'}).then((result) => {
//  console.log(result)
// })
// // const { TG } = require("./tg")
// // let e = TG('author_name','50.5655435,33.8975464546')
// // return 
// const telegraph = require('telegraph-node')
// const ph = new telegraph()

// function o() {
//     var se = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //["🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"]
//     return se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))];
// }
async function tgph() {


// [
// { tag: "a", attrs: { href: 'https://www.google.com/maps?q=50.399712,30.646697'  },children: ["📍 "+ 'https://www.google.com/maps?q=50.399712,30.646697'] },

// { tag: "img", attrs: { src: geourl } },
// { tag: "blockquote", children: ["БОКОВУШКА"] },
// { tag: "img", attrs: { src: 'https://i.ibb.co/rdFrrT5/50-440598-30-610747-iiiiiiii.jpg' } },

// //{ tag: "img", attrs: { src: geourl } },


// ]
// var rr =  [
//               {
//         "tag": "p",
//         "children": [
//           {
//             "tag": "a",
//             "attrs": {
//               "href": x.pic,
//               "target": "_blank"
//             },
//             "children": [
//               x.id
//             ]
//           }
//         ]
//       },
//       {
//         "tag": "figure",
//         "children": [
//           {
//             "tag": "img",
//             "attrs": {
//               "src": x.mid
//             }
//           },
//           {
//             "tag": "figcaption",
//             "children": [
//              x.ref
//             ]
//           }
//         ]
//       }

//         ]
      var v = [{
        "tag": "figure",
        "children": [
          {
            "tag": "img",
            "attrs": {
              "src": x.meta.mid
            }
          },
          {
            "tag": "figcaption",
            "children": [
              x.id
            ]
          },
                {
        "tag": "p",
        "children": [
          {
            "tag": "a",
            "attrs": {
              "href": x.meta.pic,
              "target": "_blank"
            },
            "children": [
              x.meta.ref
            ]
          }
        ]
      }
        ]
      }]

//return await client.createPage("N", v, "o6", x.meta.pic, true)
var e = [{
        "tag": "figure",
        "children": [
          {
            "tag": "img",
            "attrs": {
              "src": x.meta.mid
            }
          },
          {
            "tag": "figcaption",
            "children": [
              x.meta.ref
            ]
          },
                {
        "tag": "p",
        "children": [
          {
            "tag": "a",
            "attrs": {
              "href": x.meta.pic,
              "target": "_blank"
            },
            "children": [
              x.id
            ]
          }
        ]
      }
        ]
      }]

await client.getPage("N-08-25",true).then((pages) => {

	e = [...e,...pages.content]
	//console.log(JSON.stringify(o))
	//o.unshift(v)
})
//var V = v.map( e => (
	 
  
  
    //  ))
 // console.log(V)
 // var geourl = "https://www.mapquestapi.com/staticmap/v5/map?locations=50.399712,30.646697|marker-lg-04fd6c&banner=M.%20%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%3E%3ESKUNK%3C|505050-04fd6c-md-top&zoom=17&size=960,960@2x&key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb";
 // var d = dateFormat(new Date(), "-HH-mm-ss")
let re = await client.editPage(  'N-08-25','N',e)
 .then(pages => pages.url)
      .then(pages => {
          if (pages){
           
          
              return pages }
          else
             {throw Error('Balance not found');}
      })
      return re
}
      module.exports = tgph

