const{json:json}=require("./json"),status=(s,t)=>t?json({..."object"==typeof t?t:{status:s,message:t}},{status:s}):new Response(null,{status:s});module.exports={status:status};