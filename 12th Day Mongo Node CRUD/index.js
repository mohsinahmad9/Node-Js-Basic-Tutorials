const dbConnet = require('./mongodb');
//By using promise 
// dbConnet().then(response=>{
//     data = response.find({name:"Risha"}).toArray();
//     data.then(d=>{
//         console.log(d);
//     })
// })
//console.log(dbConnet());

const main = async () => {
   let data = await dbConnet();
   data = await data.find().toArray();
   console.log(data);
}

main();