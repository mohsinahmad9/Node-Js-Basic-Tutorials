    const mongoose = require('mongoose');
	const express = require('express')
    const app = express();
    app.use(express.json());
    const studentRouter = require('./routes/student')
    const studentModel = require('./model/Student');

    mongoose.connect("mongodb://0.0.0.0:27017/e-comm");

    app.get('/', (req,res)=>{
        res.send('<h1>This is a Home page</h1>')
    })
    app.use('/student',studentRouter)

    
    

    


app.listen(6500);