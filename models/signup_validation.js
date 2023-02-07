let client = require("../dbConnect");
let current_date = new Date()

 const signup_val = (req, res, dbo) => { 
    let username = req.body.username;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;

    dbo.findOne({"email_address":email}, function(err, result) {
      if (err) throw err;
      
      if (result != null){
        res.send('<script>alert("The email address already exist")</script> <meta http-equiv="refresh" content="1; URL=signup.html"/>');
      }
      else{
        dbo.findOne({"username":username}, function(err1, result1) {
          if (err1) throw err1;
          if (result1 != null){
            res.send('<script>alert("The username already exist")</script> <meta http-equiv="refresh" content="1; URL=signup.html"/>');
          }
          else{
            dbo.insertOne({ "first_name": firstname, "last_name":lastname, "email_address": email, "username":username, "password":password, "created_date": current_date});
            res.redirect("/signup.html");
          }
      })
    }
    });
 }

 module.exports = signup_val;
