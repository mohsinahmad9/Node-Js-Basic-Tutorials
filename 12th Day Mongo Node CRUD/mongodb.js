const {MongoClient} = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';

const client = new MongoClient(url);

async function dbConnetion()
{
    let result = await client.connect();
    database = result.db('e-comm');
    return database.collection('product');
}

module.exports = dbConnetion;