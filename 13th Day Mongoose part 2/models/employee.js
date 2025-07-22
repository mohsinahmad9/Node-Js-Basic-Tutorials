const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    id: {
     type:Number,
     required : true
    },
    name:{
     type:String,
    },
    designation:{
     type:String
    },
    mobile:{
     type:String,
     required:true,
     unique:true
    },
    
 }, {
	timestamps:true
 });

 
 const Employee  = mongoose.model('employee',EmployeeSchema);
 module.exports = Employee; 