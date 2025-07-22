const fs = require('fs')

var arr = ['apple','banana','guvava','mango','kiwi']

// arr.forEach(function(item){
//     fs.appendFileSync('data.txt', item+" ");
// })

const d = fs.readFileSync('data.txt').toString();

const arr2 = d.split(' ');
arr2.pop();
console.log(arr2);