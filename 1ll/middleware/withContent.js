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