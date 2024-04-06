const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = 7700;

const server = http.createServer((req, res)=> {
	if(req.url === '/'){
		const files = fs.readdirSync(__dirname);
		res.end(`${files.map(e=>`<a href=${e}>${e}</a>\n`)}`)
		// res.end(files)
	}
	if(req.url =="/files"){

	}
})

server.listen(PORT, ()=>{
	console.log(`server is running on port ${PORT}`)
})






// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const PORT = 7700;


// const server = http.createServer((req, res) => {
// const pathUrl = path.join(__dirname, req.url);
// console.log(__dirname)
// if (req.url === "/") {
// const files = fs.readdirSync(__dirname);
// res.end(`${files.map(e=>`<a href=${e}>${e}</a>\n`)}`)
// console.log(files)
// }
// else if(req.url!=="/"){
// console.log(req.url)
// }
// });


// export your server
// server.listen(PORT, () => {
// console.log(`Server running on port ${PORT}`);
// })

// export { server };
