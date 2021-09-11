// let O = []
const md = require('telegraph.md')
const Telegraph = require('telegra.ph')
var geourl = "https://www.mapquestapi.com/staticmap/v5/map?locations=50.4825,30.4887|flag-FLAG-lg-04fd6c-04fd6c&zoom=18&size=960,200@2x&key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb"

const nodes = md(`
  Heres a Heading
  ==================
  ![An old rock in the desert](${geourl})
# [link](https://zws.im/‍‍‍‌‌‌‍‌‌‍‌‌‌‍‌‍)

 ![4Tux, the Linux mascot](https://www.google.com/maps?q=50.4825,30.4887) 

![geo]('+geourl+')  <https://www.google.com/maps?q=50.4825,30.4887>

  ![4Tux, the Linux mascot](https://i.ibb.co/whfQZbG/file-193.jpg) 

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.> Dorothy followed her through many of the beautiful rooms in her castle.



>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

  
  `)


const client = new Telegraph('9303e4a588085ed2d7a56414cc9c49af60d719c75f50cbb2c13956bbcc2a')

function o6() {
    var se = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //["🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"]
    return se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))];
}

async function tgph() {

let re = await client.editPage('ll-07-29',"ll-",nodes,"2","https://echo.msk",true)
 .then(pages => pages)
      .then(pages => 
      {
          if (pages){
            console.log(pages)
          
              return pages }
          else
             {throw Error('Balance not found');}
      })
      return re
}
tgph()

/*
var fetch = require('isomorphic-unfetch')

async function re(q)  {
  const apiUrl = `http://recipepuppy.com/api/?q=${q}`

  const response = await fetch(apiUrl)
  const { results } = await response.json()
  console.info(results)
  const recipes = results
    .filter(({ thumbnail }) => thumbnail)
    .map(({ title, href, thumbnail }) => ({
      type: 'article',
      id: thumbnail,
      title: title,
      description: title,
      thumb_url: thumbnail,
      input_message_content: {
        message_text: title
      }
    }))
    
  return recipes
}

re('x')
*/
// const fb = require('./fb')
// require('isomorphic-unfetch')
// console.log(fb("465081843"))   
// var arr = [{                                                                                                                                
//       path: 'HrVr72w-07-31-4',                                                                                                       
//       url: 'https://telegra.ph/HrVr72w-07-31-4',                                                                                     
//       title: 'HrVr72w',                                                                                                              
//       description: '',                                                                                                               
//       views: 1,                                                                                                                      
//       can_edit: true                                                                                                                 
//     },                                                                                                                               
//     {                                                                                                                                
//       path: 'n0KvFXX-07-31',                                                                                                         
//       url: 'https://telegra.ph/n0KvFXX-07-31',                                                                                       
//       title: 'n0KvFXX',                                                                                                              
//       description: '',                                                                                                               
//       views: 0,                                                                                                                      
//       can_edit: true                                                                                                                 
//     },                                                                                                                               
//     {                                                                                                                                
//       path: 'HrVr72w-07-31-3',                                                                                                       
//       url: 'https://telegra.ph/HrVr72w-07-31-3',                                                                                     
//       title: 'HrVr72w',                                                                                                              
//       description: '',                                                                                                               
//       views: 1,                                                                                                                      
//       can_edit: true                                                                                                                 
//     },                                                                                                                               
//     {                                                                                                                                
//       path: 'HrVr72w-07-31-2',                                                                                                       
//       url: 'https://telegra.ph/HrVr72w-07-31-2',                                                                                     
//       title: 'HrVr72w',                                                                                                              
//       description: '',                                                                                                               
//       views: 3,                                                                                                                      
//       can_edit: true                                                                                                                 
//     },                                                                                                                               
//     {                                                                                                                                
//       path: 'HrVr72w-07-31',                                                                                                         
//       url: 'https://telegra.ph/HrVr72w-07-31',                                                                                       
//       title: 'HrVr72w',                                                                                                              
//       description: '',                                                                                                               
//       views: 1,                                                                                                                      
//       can_edit: true                                                                                                                 
//     }
// ]


// When using TypeScript, need to specify type:
// var result = arr.map((i): [string, string] => [i.key, i.val])

// Unfortunately maps don't stringify well.  This is the contents in array form.
//console.log("Result is: " + JSON.stringify([...result]));
/*
const client = new Telegraph('7d914d9d538afc840c1554bf853224a2070c9a2fe4467ac53f3ef04ae559')
async function get() {
let list = await client.getPageList()//.then((pages) => {
 list = list.pages.filter(element => element.author_name).reverse() 
 var result = new Map(list.map(i => [i.title,  i.url]))
 result = [...result]//JSON.stringify([...result])
console.info(result)
 result = result.reverse().filter((result,idx) => idx < 15)
 .reduce((acc, val) => `${acc}[${val[0]}](${val[1]}) \n`, '')




 */
 // console.info(result) 
   //if(x){}
//   
// // re = re.filter((list,idx) => idx < x)
// re = re.filter(element => element.author_name === y)
// let req = await client.getPage(re[0].path,true)
// let re2 = await client.editPage(req.path,req.title,req.content)
// console.info(re2) 
// let list = pages.pages
// var items
//   let recipes = items
     
//     .map(({ path }) => (
//      path 
//     ))
 // re = re.pages
// x = x || 10
 //let list = await client.getPageList()//.then((pages) => {



//   let recipes = items
    
//     .map(({ path }) => (
//      path 
//     ))
// console.info(result)
// return result

// }	

//console.info(get(309))
//module.exports = get
