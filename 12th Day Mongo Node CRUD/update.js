const dbConnet = require('./mongodb');

const updateData = async () => {
    let data = await dbConnet();

    let result = await data.updateOne(
    //let result = await data.updateMany(
        {name:'Mallika Sherawat'},
        {$set: {name:'Mallika Khatri', mobile:'8877665544'}}
    );
    console.log(result);
}

updateData();