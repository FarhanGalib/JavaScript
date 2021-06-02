const mongoose = require("mongoose");
const validator = require("validator");
const color = require("color");

const userSchema = new mongoose.Schema({

    name: {
        
        type: String,
        minLength: 3,
        maxLength: 30,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        validate(value){
            if(value<18){
                throw new Error(`age can't be less than 18.`);
            }
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid.");
            }
        }

    },
    password: {
        type: String,
        required: true,
        minLength:6,
        trim: true,
        }
});

const User = mongoose.model("User", userSchema);

module.exports = User;