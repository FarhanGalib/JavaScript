


const fs = require('fs').promises;

async function fileCreateInsertDelete(){
    //write
    //await fs.writeFile("./app.txt","This is new file");

    //read
    //const data = await fs.readFile("./app.txt","utf-8" );
    //console.log(data);

    //change file name delete file
    //await fs.rename("./app.txt","./helper.txt");

    //delete file
    await fs.unlink("./helper.txt");
};
fileCreateInsertDelete();