
const fs = require("fs").promises;

async function calSalary(){

    let data = await fs.readFile("./data.json","utf-8");
    data = JSON.parse(data);

    let sum = 0;
    for(let user of data){
        sum += user.salary;
    }
    console.log(sum);
    await fs.writeFile("./sum.txt", sum.toString());
}

calSalary();