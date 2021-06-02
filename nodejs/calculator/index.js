
const add = require("./cal/add.js");
const sub = require("./cal/sub.js");
const mul = require("./cal/mul.js");
const div = require("./cal/div.js");

const a = parseInt(process.argv[2]);
const choice = process.argv[3];
const b =parseInt(process.argv[4]);

if(choice==="ADD"){
    console.log(add(a,b));
}else if(choice==="SUB"){
    console.log(sub(a,b));
}else if(choice==="MUL"){
    console.log(mul(a,b));
}else if(choice==="DIV"){
    console.log(div(a,b));
}else{
    console.log("invalid choice!!");
}
