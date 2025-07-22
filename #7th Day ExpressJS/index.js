const express = require('express');
const app = express();
console.log(app);



//create links 
app.get('/',(request,response)=>{
    response.send(`
        <h1>This is Home Page</h1>
        <a href='/about'>about</a>
    `);
});


app.get('/about',(request,response)=>{
    response.send(`Hello, this About Page  <a href='/'>Home</a>`);
});




//using querystring data from url
app.get('/product',(request,response)=>{
    console.log("data sent by browser ", request.query);
    response.send('Hello, this About Page '+request.query.name);
});

//html tag renders
app.get('/contact',(request,response)=>{
    response.send(`
        Name : <input type='text'/><br>
        Mobile : <input type='text'/><br>
        <button>Submit</buttom>
    `);
});

// using json data
app.get('/help',(request,response)=>{
    response.send([{
        name:'Mohsin Ahmad',
        email:'technology.credible@gmail.com'
    },
    {
        name:'Risha Khan',
        email:'rishakhan@gmail.com'
    }

]);
});


app.listen(6500);