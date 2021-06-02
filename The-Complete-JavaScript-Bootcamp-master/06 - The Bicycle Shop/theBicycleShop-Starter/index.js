const http = require('http');
const url = require('url');
const fs = require('fs').promises;

const bicycles = require('./data/data.json');




const server = http.createServer(async(req, res) => {
    if(req.url==='/favicon.ico') return;
     console.log(req.url);
    // console.log(req.headers);
    const myUrl = new URL(req.url,`http://${req.headers.host}/`);
    // console.log("::"+myUrl.pathname);
    // console.log("::"+myUrl.searchParams.get('id'));
    const pathname = myUrl.pathname;
    const id = myUrl.searchParams.get('id');
``
    if(pathname==='/'){
        let html = await fs.readFile('./views/bicycles.html','utf-8');
        let eachBicycle = await fs.readFile('./views/partials/bicycle.html', 'utf-8'); 
        let allTheBicycles = "";
        for(let index = 0; index<6; index++){
            allTheBicycles += replaceTemplates(eachBicycle,  bicycles[index]);
        }
        html = html.replace(/<%AllTheBicycles%>/g, allTheBicycles);
        res.writeHead(200, {'Content_Type':'text/html'});
        res.end(html);

    }
    else if (pathname==='/bicycle' && id >=0 && id <=5){
        let html =await fs.readFile('./views/overview.html','utf-8');
        let bicycle = bicycles.find((b)=> b.id===id);
        
        html = replaceTemplates(html,bicycle);
        
        res.writeHead(200, {'Content_Type':'text/html'});
        res.end(html);

    }
    else if(/\.(png)$/i.test(req.url)){
        const image = await fs.readFile(`./public/images/${req.url.slice(1)}`);
        res.writeHead(200,{'Content-Type' : 'image/png'});
        res.end(image);

    }
    else if(/\.(css)$/i.test(req.url)){
        const css = await fs.readFile(`./public/css/index.css`);
        res.writeHead(200,{'Content-Type' : 'text/css'});
        res.end(css);

    }
    else if(/\.(svg)$/i.test(req.url)){
        const svg = await fs.readFile(`./public/images/icons.svg`);
        res.writeHead(200,{'Content-Type' : 'image/svg+xml'});
        res.end(svg);

    }
    else{
        res.writeHead(404, {'Content_Type':'text/html'});
        res.end('<div><h1>404</h1><h1>File Not Found.</h1></div>');
    }
    

    // res.writeHead(200,{"Content-Type" : "text/html"});
    // res.end("<h1>Hello</h1>");
});



function replaceTemplates(html,bicycle){
        html = html.replace(/<%IMAGE%>/g,bicycle.image);
        html = html.replace(/<%NAME%>/g,bicycle.name);

        let price = bicycle.originalPrice;
        let discount = bicycle.discount;
        
        if(bicycle.hasDiscount){
            price = ((100-discount)*price)/100;  
        }
        html = html.replace(/<%NEWPRICE%>/g,price);
        html = html.replace(/<%OLDPRICE%>/g, bicycle.originalPrice);
        html = html.replace(/<%ID%>/g, bicycle.id);
        
        if(bicycle.hasDiscount){
            html = html.replace(/<%DISCOUNT%>/,`<div class="discount__rate"><p>${bicycle.discount}% Off</p></div>`);
        }
        else{
            html = html.replace(/<%DISCOUNT%>/,'');
        }

        for(index=0; index<bicycle.star; index++){
            html = html.replace(/<%STAR%>/,'checked');
        }
        html = html.replace(/<%STAR%>/g,'');

        return html;
}


server.listen(3000);

