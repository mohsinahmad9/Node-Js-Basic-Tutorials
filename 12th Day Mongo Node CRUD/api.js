const express = require('express')
const cors = require('cors')
const dbConnetion = require('./mongodb')

const app = express();

app.use(express.json());
app.use(cors());

//http://localhost:6500/
app.get('/', async(req,res)=>{
    let data = await dbConnetion();
    data = await data.find().toArray();
    res.send(data)
});


app.get('/:mobile', async(req,res)=>{
    let data = await dbConnetion();
    data = await data.find({mobile:req.params.mobile}).toArray();
    res.send(data)
});

app.post('/', async (req,res)=>{
    let data = await dbConnetion();
    let result = await data.insertOne(req.body);
    res.send({status:'Successfully Inserted'});
});

app.put('/:mobile', async (req,res)=>{
    let data = await dbConnetion();
    data.updateOne(
        {mobile:req.params.mobile},
        {
            $set : {name:req.body.name, city:req.body.city}
        }
    )
    res.send({result:"Document updated "});
});


app.delete("/:mobile", async (req, res)=>{
    console.log(req.params.mobile);
    const data = await dbConnetion();
    //const result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)});
    const result = await data.deleteOne({mobile:req.params.mobile})
    res.send(result);
})



app.listen(6500);