const express = require('express');


const {
    handleCreateNewEmployee,
    handleGetAllEmp, 
    handlegetEmpById, 
    handleUpdateEmpById,
    handleDeleteEmpById
} = require('../controllers/employee');




const router = express.Router();

router.get('/', handleGetAllEmp);


router.post('/', handleCreateNewEmployee);




router
    .route('/:id')
    .get(handlegetEmpById)
    .patch(handleUpdateEmpById)
    .delete(handleDeleteEmpById)

module.exports = router;