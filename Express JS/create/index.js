const express = require('express');
const app = express();



// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

app.use((req, res, next)=>{
    console.log("hello from middleware");
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.get('host'));
    console.log(req.originalUrl);

    next();
});

app.get('/', (req,res,next)=>{
    res.send("<h1>Hello World</h1>");
});

app.get('/about',(req,res,next)=>{
    res.json({hello : "there"});
} );


app.post('/login',(req,res,next)=>{
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.password);

    res.send("Successfully logged in");
} );

app.listen(3000, function() {
    console.log("Farhan, server is running at 3000 port");
});