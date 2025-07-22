const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname,'public');

//localhost:6500/
app.get('/',(request,response)=>{
    response.sendFile(`${publicpath}/index.html`)
});
app.get('/home',(request,response)=>{
    response.sendFile(`${publicpath}/home.html`)
});

app.get('/about',(request,response)=>{
    response.sendFile(`${publicpath}/about.html`)
});

app.get('/contact-us',(request,response)=>{
    response.sendFile(`${publicpath}/contact.html`)
});

app.get('*',(request,response)=>{
    response.sendFile(`${publicpath}/404.html`)
});



app.listen(6500);