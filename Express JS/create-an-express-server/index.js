const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())






app.get('/',(req,res, next)=>{
    res.send('<h1>Farhan</h1>');
    next();
});
app.use((req,res,next)=>{
    console.log("middleware");
    next();
});



app.get('/about', (req, res)=>{
    res.json({
        name : "Galib"
    })
})

app.post('/login', (req,res)=>{
    console.log(req.body.email);
    console.log(req.body.pass);


    res.send("login successful");
})

app.listen(3000,() => console.log(" Farhan Server is running at 3000 port!!"));