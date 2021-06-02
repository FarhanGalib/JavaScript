const mongoose = require('mongoose');
const express = require("express");
const validator = require("validator");
const colors = require("colors");

const app = express();

mongoose.connect('mongodb://localhost:27017/allInOne', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('Database is connected'))
.catch((err) => console.log(err));


const User = require("./model/User.js");
const Task =  require("./model/Task.js");
const { response } = require('express');

//add user and task
//async function db(){
    // try{
        // const user = new User({
        //     name: "Farhan",
        //     age: 18,
        //     email: "fg@gmail.com",
        //     password: "12345"
        // });

        // const task = new Task({
        //     description : "Coding"
        // });
        // await task.save();
        // console.log(task);
//     }
//     catch(e){
//         console.log(colors.red.underline.bold(e.message));
//     }
    
// }
// db();

app.use(express.json());

app.post("/task", async (req, res)=> {
    try{
        console.log(req.body);
    const task = new Task(req.body);
    console.log(task);
    await task.save();

    return res.status(201).json({success: true, task});
    } catch(e){
        return res.status(404).json({success: false, message: e.message});
    }
});

app.post("/user", async (req, res)=> {
    try{
        console.log(req.body);
    const user = new User(req.body);
    console.log(user);
    await user.save();

    return res.status(201).json({success: true, user});
    } catch(e){
        return res.status(404).json({success: false, message: e.message});
    }
});





//show all user and task
app.get("/task", async (req, res)=> {
    const tasks = await Task.find();
    return res.status(200).json({success: true, tasks});
});

app.get("/user", async (req, res)=> {
    const users = await User.find();
    return res.status(200).json({success: true, users});
});








//show one user and task
app.get("/task/:id", async (req, res)=> {
    const task = await Task.findById(req.params.id);
    return res.status(200).json({success: true, task});
});

app.get("/user/:id", async (req, res)=> {
    const user = await User.findById(req.params.id);
    return res.status(200).json({success: true, user});
});





//update 
app.patch("/user/:id", async (req, res) =>{
    try{ 
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true,
        });
        
        if(!user){
            return res.status(404).json({success:false, message: "User not found."});
        }

        return res.json({success: true, user});

    } catch(e){
        return res.status(400).json({success: false, message: e.message});
    }
});


app.patch("/task/:id", async (req, res) =>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        
        if(!task){
            return res.status(404).json({success:false, message: "User not found."});
        }

        return response.json({success: true, task});

    } catch(e){
        return res.status(400).json({success: false, message: e.message});
    }
});


const  port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Server is running at ${port}`));