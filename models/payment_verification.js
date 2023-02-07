let client = require("../dbConnect");
const payment_det = (req, res, dbo, dbo1) => { 
        let cardnumber = req.body.cardnumber;
        let cvc = req.body.cvc;
        let emonth = req.body.emonth;
        let eyear = req.body.eyear;
        let card_type = req.body.pay;
        let email = req.body.email;
        let fname = req.body.fname;
        let lname = req.body.lname;
        let current_date = new Date();
    
        // dbo1.findOne({ "first_name": fname, "last_name":lname, "email_address": email, "payment_status" : "unpaid"}, function(err, result) {
        //   if (err) throw err;
        //   console.log(result);
        //   if(result != null)
        //   {
        //     dbo1.deleteOne({
        //       "$expr": {
        //         "$lt": [
        //           {
        //             "$max": "created_date"
        //           },
        //           "$created_date"
        //         ]
        //       }
        //     })
        //   }
        // });
    
        dbo1.insertOne({ "first_name": fname, "last_name":lname, "email_address": email, "payment_status" : "unpaid", "created_date": current_date});
    
        dbo.findOne({'card_number': cardnumber, 'card_cvc': cvc, "emonth" : emonth, "eyear" : eyear, "card_type": card_type}, function(err, result) {
          if (err) throw err;
          if (result == null){
            res.send('<script>alert("Your card details didnot match with the database. Please look into the payment details and try again.")</script> <meta http-equiv="refresh" content="1; URL=payment.html"/>')
        }
        else{
          dbo.findOne({'email':email}, function(err1, result1){
            if (err1) throw err1;
            if (result1 == null){
              res.send('<script>alert("The email linked with the card didnot match. Please try again.")</script> <meta http-equiv="refresh" content="1; URL=payment.html"/>')
            }
            else{
              try {
                dbo1.updateMany(
                   {"first_name": fname, "last_name":lname, "email_address": email},
                   { $set: { "payment_status" : "paid" , "updated_date": current_date} }
                  );
              } catch (e) {
                  console.log(e);
              }
              res.redirect('/mainpage.html')
            }
          })
          
        }
    });
    
 }

 module.exports = payment_det;
