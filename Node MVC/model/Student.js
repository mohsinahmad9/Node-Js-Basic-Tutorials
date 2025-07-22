const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
                name : String,
                city : String,
                phone: String
        });
const studentModel = mongoose.model('student', studentSchema);

module.exports = studentModel;