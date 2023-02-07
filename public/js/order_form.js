
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Pay";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("order_form").submit();
    // window.open("../payment.html")
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
//    lets validate the form. Get form data
var name = document.getElementById("fname").value;
var state = document.getElementById("state").value;
var city = document.getElementById("city").value;
var housenumber = document.getElementById("housenumber").value;
var street_name = document.getElementById("street_name").value;

var pcode = document.getElementById("pcode").value;
var pnum = document.getElementById("pnum").value;
var eml = document.getElementById("email").value;

  if (currentTab == 0)
  {
    
    valid = val(pcode, pnum, eml, valid, "numbermsg", "namemsg", "emailmsg");
  }
  else if (currentTab == 1)
  {
    var rname = document.getElementById("rfullname").value;
    var rstate = document.getElementById("rstate").value;
    var rcity = document.getElementById("rcity").value;
    var rhousenumber = document.getElementById("rhousenumber").value;
    var rstreet_name = document.getElementById("rstreet_name").value;

    var rpcode = document.getElementById("rpcode").value;
    var rpnum = document.getElementById("rpnum").value;
    var reml = document.getElementById("remail").value;
    
    valid = val(rpcode, rpnum, reml, valid, "rnumbermsg", "rnamemsg", "remailmsg");
  }
  
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    if (currentTab == 1)
    {
        var par_num = document.getElementById("parnum").value;
        var par_wt = document.getElementById("pweight").value;
        var price = price_cal(par_wt);

        document.getElementById('sname_msg').innerHTML = "<em> Sender Name: "+name+"</em>";
        document.getElementById('sadd_msg').innerHTML = "<em> Sender Address: "+housenumber+", "+street_name+", "+city+ ", "+ state + ", "+ pcode+"</em>";
        document.getElementById('semail_msg').innerHTML = "<em> Sender e-mail: "+eml+"</em>";
        document.getElementById('sphone_msg').innerHTML = "<em> Sender phone number: "+pnum+"</em>";

        document.getElementById('rname_msg').innerHTML = "<em> Receiver Name: "+rname+"</em>";
        document.getElementById('radd_msg').innerHTML = "<em> Receiver Address: "+rhousenumber+", "+rstreet_name+", "+rcity+ ", "+ rstate + ", "+ rpcode+"</em>";
        document.getElementById('remail_msg').innerHTML = "<em> Receiver e-mail: "+reml+"</em>";
        document.getElementById('rphone_msg').innerHTML = "<em> Receiver phone number: "+rpnum+"</em>";

        document.getElementById('pnum_msg').innerHTML = "<em> Total number of parcel: "+par_num+"</em>";
        document.getElementById('pwt_msg').innerHTML = "<em> Total weight of the parcel: "+par_wt+"</em>";
        document.getElementById('pprice_msg').innerHTML = "<em> Total Price: $"+price+"</em>";
    }
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

function success(idname)
{
    // if success show nothing
    document.getElementById(idname).innerHTML = "";
    // remove the error text and red border
    document.getElementById(idname).classList.remove("text-danger");
    document.getElementById(idname).classList.add("text-success");
}

function val(pcode, pnum, eml, valid, nmsg, namsg, emsg)
{
    // regular expression use to validate
  if (/[a-zA-Z]/g.test(pnum)) 
  {
      // Showing a error message
      document.getElementById(nmsg).innerHTML = "<em> Contains character '"+ pnum[pnum.search(/[a-zA-Z]/g)] +"'. Numbers only!</em>";
      document.getElementById(nmsg).classList.add("text-danger");
      valid=false;
  }
  else if (pnum.search(/[0-9]{10}/i) == -1)
  {
      // Showing a error message
      document.getElementById(nmsg).innerHTML = "<em>Phone numbers must be of 10 digits</em>";
      document.getElementById(nmsg).classList.add("text-danger");
      valid=false;
  }
  else
  {
      // success message
      success(nmsg);
  }

if (pcode.search("^(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})$"))
  {
      document.getElementById(namsg).innerHTML = "<em> Please enter a valid post code</em>";
      document.getElementById(namsg).classList.add("text-danger");
      valid=false;
  }
  else
  {
      success(namsg);
  }

  if (eml.search(/^\S+@\S+\.\S+$/) == -1)
  {
      document.getElementById(emsg).innerHTML = "<em>Please enter a valid email address</em>";
      document.getElementById(emsg).classList.add("text-danger");
      valid=false;
  }
  else
  {
      success(emsg);
  }
  return valid
}

function price_cal(parcel_wt)
{
    let price = 0.0;
    if(parcel_wt < 5)
    {
        price = 2.5;
    }
    else if ((parcel_wt>=5) && (parcel_wt<15)){
        price = 3.5;
    }
    else{
        price = 5;
    }
    return price * parcel_wt
}
