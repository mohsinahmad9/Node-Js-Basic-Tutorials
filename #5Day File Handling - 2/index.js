const fs  = require("fs");

const data = fs.readFileSync("testfile.txt","utf-8");

console.log(data);


const arr = data.split(/\r?\n/);
// using .split(/\r?\n/)  if you hava file which has a data in lines

let newarr = arr.map(item=> parseInt(item));
//fs.writeFileSync('writefile.txt',data)
console.log(newarr);