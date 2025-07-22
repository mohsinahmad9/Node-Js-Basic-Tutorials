const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/hello.txt`;

//writing to a file

//fs.writeFileSync(filePath,'This is one of the most important file concept of node js');

//append data to file
fs.appendFile(filePath, '. This part has appended.',(err)=>{
    if(!err)
    {
        console.log("File has benn updated..!");
    }
})

//Reading from a file
fs.readFile(filePath, 'utf8',(err, item)=>{
    console.log(item);
})


//Reaname a file
fs.rename(filePath,`${dirPath}/welcome.txt`,(err)=>{
    if(!err)
    {
        console.log("File has benn updated..!");
    }
})

//delete a file

fs.unlinkSync(`${dirPath}/welcome.txt`);


//
