const http = require("http");
const url = require("url");

const server = http.createServer((req, res)=>{
    if(res.ur==='/favicon.ico') return;
    console.log(req.url);
    const myURL = new URL(req.url,"http://localhost:3000/");
    console.log(myURL);
    console.log(myURL.searchParams.get('id'));
    console.log(myURL.searchParams.get('category'));


    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>Hello...</h1>");
    
});

server.listen(3000);


//http://localhost:3000/product?id=1&category=fruit