// const fb = require('./fb')
// require('isomorphic-unfetch')
// console.log(fb("465081843"))
// const Telegraph = require('telegra.ph')
const tgph = require('./tg.ph')
//const client = new Telegraph('8ade475cc852e90ba88cc1bb38daf98b16a842149a168063d1f1d9c1bf06')
async function get(x) {
// 	x = x || 5
// client.getPageList().then((pages) => {
// let list = pages.pages
// var items = list.filter((list,idx) => idx < x)
//   let recipes = items
    
//     .map(({ title, url }) => (
//       "\n\n ["+title+"]("+url+")" 
//     ))
  
let re = await  tgph(["50.4825,30.4887","FEEE FUUU","https://i.ibb.co/whfQZbG/file-193.jpg"])
console.info(re)
//   recipes = items
    
//     .map(({ url }) => (
//       url 
//     ))
  

// console.log(recipes)
	
}
get()
//module.exports = get