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

    // dbo.customers.drop();
})



// module.exports = dbo;
module.exports = client;