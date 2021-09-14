import './_6cc'

const router = require('./1ll/post')

async function fetchAndApply(re) {

  try {
console.log(re)
    return await router(re.request).catch(err => console.error(err))
  } catch (err) {
 console.error(err)
    return new Response(err.message)
  }
}


addEventListener('fetch', (event) => {
  event.respondWith(fetchAndApply(event));
});
