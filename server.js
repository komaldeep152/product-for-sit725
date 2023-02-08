let express = require("express");
let app = express();

var cors = require("cors")
let projectCollection;
let dbConnect = require("./dbConnect");
let signup_routes = require("./routes/signup_routes");
let login_routes = require("./routes/login_routes");
let payment_routes = require("./routes/payment_routes");
let order_routes = require("./routes/order_routes");

const client = require("./dbConnect");

var bodyParser = require('body-parser');


let http = require('http').createServer(app);
let io = require("socket.io")(http);
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}));
app.use(cors());
app.use(bodyParser.json())
app.use('/signup', signup_routes)
app.use('/login', login_routes)
app.use('/payment', payment_routes)
app.use('/mainpage', order_routes)


var port = process.env.port || 8080;

// socket test 
io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
    setInterval(()=>{
      socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
  
  });
  app.get('/test', (request, response) => {
    var user_name = request.query.user_name;
    response.end("Hello " + user_name + "!");
})


app.get('/pricecalc/:pweight', function (req, res) {
    var parcel_weight = parseInt(req.params.pweight);
    var price=0.0;
    if(parcel_weight < 5)
        {
            price = 2.5;
        }
        else if ((parcel_weight>=5) && (parcel_weight<15)){
            price = 3.5;
        }
        else{
            price = 5;
        }
    var result = price * parcel_weight || null;
    
    if (result == null) {
        res.json({ result: result, statusCode: 400 }).status(400);
    }
    else {
        res.json({ result: result, statusCode: 200 }).status(200);
    }
})

app

http.listen(port, () =>{
    console.log("Listening on port: " + port)
    // createCollection("Australia")
})

