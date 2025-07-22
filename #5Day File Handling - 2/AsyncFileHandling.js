const fs = require('fs')
// const data = 'This is Nikhil Khaushal, I am learning Node.JS, I am a student of B.Tech CSE 3rd year at NIT Jalandhar';

// fs.writeFile('asyncRead.txt',data, err=>{
//     if(err)
//     {
//         throw err;
//     }
// })
fs.readFile('asyncRead.txt','utf-8', (err,data)=>{
    if(!err)
    {
        console.log(data)
    }
    else{
        throw err;
    }
});
