const Employee = require('../models/employee');

const handleGetAllEmp = async (req,res)=>{
    const alldbuser = await Employee.find();
    return res.json(alldbuser);
}

const handleCreateNewEmployee = async(req,res)=>{
    const body = req.body;
    if(!body.id || !body.name || !body.designation || !body.mobile){
        return res.status(400).json({msg :'All fields are required..'});
    }
    const result = await Employee.create({
        id:body.id,
        name:body.name,
        designation:body.designation,
        mobile:body.mobile
    });
    return res.status(201).json({msg :'Created Successfully', id:result._id});
}
const handlegetEmpById = async (req,res)=>{
    const emp = await Employee.findById(req.params.id);
    if(!emp) {
        return res.status(404).json({error:"emp not found"});
    }
    return res.json(emp);
}

const handleDeleteEmpById = async (req,res)=>{
    await Employee.findByIdAndDelete(req.params.id);
    return res.json({status : "Success"});
}
const handleUpdateEmpById = async (req,res)=>{
    await Employee.findByIdAndUpdate(req.params.id, {designation:"Changed"});
    return res.json({status : "Success"});
}
module.exports = {
    handleGetAllEmp,
    handlegetEmpById,
    handleUpdateEmpById,
    handleDeleteEmpById,
    handleCreateNewEmployee
}