const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url  === '/') {
     res.end('welcome to my home page!');
    }
    if (req.url  === '/about') {
        res.end('welcome to you!');
       }
//res.write('welcome to my home page')
res.end(`<h1>Oops</h1>
       <p>No come here guy</p>
      <a href ="/"> Go back Oga</a>`
) 
})

server.listen(50000)
