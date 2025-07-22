const dbConnet = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnet();
    let result = await data.deleteOne({name:'Mallika Sherawat'});
    //let result = await data.deleteMany({city:'mumbai'});
    console.log(result);
}

deleteData();