
const express = require("express");
const app = express();

const bicycles = require("./data/data.json");

app.set("view engine", "ejs");

app.use(express.static("public"));


app.get('/', (req, res)=>{
    return res.render('bicycles',{
        bicycles : bicycles
    });
});


app.get('/bicycle', (req, res)=>{
    const {id} = req.query;
    if(id < 0 || id >= bicycles.length){
       
        return res.status(404).send("<h1>No bicycle found with this id</h1>");
    }
    let bicycle = bicycles.find(b=>b.id===req.query.id); 
    console.log(req.query.id);
    console.log(bicycle);
    return res.render("overview",{
        bicycle : bicycle
    });
});


app.get( (req, res)=>{
    return res.status(404).send("<h1>404</h1><p>Not Found</p>");
});
app.listen(3000,()=> console.log("server is running at 3000"));
