        var email = document.forms['form']['email'];
        var password = document.form['form']['password'];

        var email_error = document.getElementById('email_error');
        var pass_error = document.getElementById('pass_error');

        email.addEventLister('textInput', email_verify);
        password.addEventLister('textInput', pass_verify);


        function validated(){
            if (email.value.lenght < 9){
                email.style.border = "1px solid red";
                email_error.style.display= "block";
                email.focus();
                return false;
            }
        }
        if (password.value.lenght < 6){
            password.style.border = "1px solid red";
            pass_error.style.display= "block";
            password.focus();
            return false;
        }
        function email_verify(){
            if (email.value.lenght >= 8){
                email.style.border = "1px solid silver";
                email_error.style.display= "none";
                return true;
        }
        }
        function pass_verify(){
            if (password.value.lenght >=5){
                password.style.border = "1px solid silver";
                pass_error.style.display= "none";
                return true;
        }
    }