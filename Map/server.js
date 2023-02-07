var express = require("express")
var app = express()
var cors = require("cors")
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");


app.use(express.static(__dirname+'/public'))

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use('/api/projects',projectRoutes)


var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: http://localhost:"+port)
})