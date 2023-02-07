let client = require("../dbConnect");
let current_date = new Date();

const login_val = (req, res, dbo) => { 
    let username = req.body.username;
    let password = req.body.password;
    dbo.findOne({$or: [{'email_address': username}, {'username': username}]}, function(err, result) {
      if (err) throw err;
      if (result == null){
                res.send('<script>alert("The username/email is not found. Please try again")</script> <meta http-equiv="refresh" content="1; URL=login.html"/>');
      }
      else{
        dbo.findOne({"password":password}, function(err2, result2) {
            if (err2) throw err2;
            if (result2 == null){
                res.send('<script>alert("The password didnot match. Please try again")</script> <meta http-equiv="refresh" content="1; URL=login.html"/>');
            }
            else{
              try {
                dbo.updateMany(
                  {$or: [{'email_address': username}, {'username': username}]},
                   { $set: {"last_login_date": current_date} }
                  );
              } catch (e) {
                  console.log(e);
              }
                res.redirect("/mainpage.html");
            }

      })
    }
    });
 }

 module.exports = login_val;
