const express = require('express');
const mongoose = require('mongoose');
const app  = express();
const {connectMongoDB} = require('./connection');


const empRouter = require('./routes/employee');


//connection
connectMongoDB('mongodb://0.0.0.0:27017/credibledb')

app.use(express.json());

//Routes
//localhost:6500/employee
app.use('/employee',empRouter );
//app.use('/student',stdRouter );


app.listen(6500);
