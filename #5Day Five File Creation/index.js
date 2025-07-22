const fs = require('fs');

fs.writeFileSync('hello.txt','This is my demo file. Created by Node.js');

fs.unlinkSync('hello.txt');// to delete the file