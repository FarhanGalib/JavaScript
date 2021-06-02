
const http = require('http');
const fs = require("fs").promises;

const server = http.createServer(async(req, res)=>{

    console.log("Server is running");

    const data = await fs.readFile("./index.html", "utf-8");
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.end(data);
});


server.listen(3000);

