    const mongoose = require('mongoose');
	
	const main = async () =>{
	await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
	
    const studentSchema = new mongoose.Schema({
			name : String,
			city : String,
            phone: String
    });
	
    const StudentModel = mongoose.model('student', studentSchema);


    let data = new StudentModel({name:"Mohd Umar",city:'Saharanpur', phone:'9897665544'});
    let result = await data.save();
    //console.log(mongoose.connection.readyState);
    console.log(result);
}
main();