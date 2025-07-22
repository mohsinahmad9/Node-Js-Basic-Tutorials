const fs = require('fs');
const path = require('path');

//const dirPath = path.join(__dirname);
//const dirPath = path.join(__filename);
const dirPath = path.join(__dirname,'files');
let arr = ['fruits.txt','numbers.txt','mix.txt','books.txt','vehicle.txt'];
let fruits = "Apple banana mango papaya, kiwi";
let numnbers = '1 2 3 4 5 6 7 8 9';
let mix = 'One 2 three 4 false true';
let books = 'lets us c, elequente Javascritpt, thing and grow rich, rich dad poor dad';
let vehicle = 'car bus train truck bike cycle';
for(i=0;i<5;i++)
{
    fs.writeFileSync(dirPath + `/${arr[i]}.txt`,fruits);
}

fs.readdir(dirPath, (err, files)=>{
    files.forEach(item =>{
        console.log(item);
    })
})