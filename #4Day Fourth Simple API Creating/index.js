const http = require('http');


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({name:'Vivek Chauhan',mobile:'9897335904', email:'mohsin@gmail.com'}));
    res.end();
}).listen(5000);
