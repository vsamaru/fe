// require('8oo')

const handler = require('./1ll/post')

async function fetchAndApply(event) {
  try {
    return handler(event)
  } catch (err) {
 
    return new Response(err.message)
  }
}


addEventListener('fetch', (event) => {
  event.respondWith(fetchAndApply(event));
});
