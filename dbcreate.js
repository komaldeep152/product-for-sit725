require('dotenv').config()

//mongoDB connection
const MongoClient = require("mongodb").MongoClient;

//add database connection
const uri = 'mongodb+srv://psapkota:mamu1997@cluster0.raumtos.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err,db) => {
    if(!err){
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }

    var dbo = db.db("project");
    // dbo.customers.drop();
    dbo.createCollection( "customers" , 
    {validator:{"$jsonSchema":{"bsonType":"object","additionalProperties":false,"required":["_id"],
    "properties": {
    "name":{"bsonType":"string"},
    "address":{"bsonType":"string"},
    "username":{"bsonType":"string"},
    "password":{"bsonType":"string"},
    "date":{"bsonType":"date"}}},
    "$expr": [
    ]}});
    console.log("Created Collection Customers")

})



module.exports = client;