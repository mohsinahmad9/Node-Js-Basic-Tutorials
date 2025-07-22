const express = require('express')
const studentModel = require('../model/Student')
const route = express.Router();

route.get('/', async (req,res)=>{
    const alldbuser = await studentModel.find();
    return res.json(alldbuser);
})

module.exports = route;