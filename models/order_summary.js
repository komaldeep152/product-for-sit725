let client = require("../dbConnect");
let current_date = new Date()

 const order_sum = (req, res, dbo) => { 
    let pweight = req.body.pweight;
    let price = 0.0;
        if(pweight < 5)
        {
            price = 2.5;
        }
        else if ((pweight>=5) && (pweight<15)){
            price = 3.5;
        }
        else{
            price = 5;
        }
    let t_price = price * pweight
    let data = Object.assign(req.body, {"price": t_price, "created_date": current_date})
    try {
        dbo.insertOne(data);
    }
    catch (e){
        console.log(e);
    }
    res.redirect("/payment.html");
 }

 module.exports = order_sum;
