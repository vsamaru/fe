
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


      
    

async function tgph(x) {


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

