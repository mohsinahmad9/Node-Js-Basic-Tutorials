const dbConnet = require('./mongodb');

// single insert data

const insertdata = async () => {
    const db = await dbConnet();
    const result = await db.insertOne(
        {
        name : "Mohd Umnar",
        city : "Noida",
        mobile : "9897009778"
    })
    console.log(result);
   if(result.acknowledged)
   {
    console.log('data inserted');
   }
   else{
    console.log('data not inserted');
   }
}

// multiple data insert
const insertMultipleData = async () => {
    const db = await dbConnet();
    const result = await db.insertMany(
        [
            {
                name : "Anupam Mittal",
                city : "Noida",
                mobile : "9897000012"
            },
            {
                name : "Mukesh Ambani",
                city : "Mumbai",
                mobile : "9897098012"
            },
            {
                name : "Gazal Alakh",
                city : "Ludhiana",
                mobile : "9897098012"
            },
        ]
    )
   if(result.acknowledged)
   {
    console.log('data inserted');
   }
   else{
    console.log('data not inserted');
   }
}
insertMultipleData();