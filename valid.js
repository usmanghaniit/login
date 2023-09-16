var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");

email.addEventListener("textInput", emailVerify);
password.addEventListener("textInput", passVerify);


function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 9){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}
function emailVerify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function passVerify(){
    if(password.value.length >= 5){
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}