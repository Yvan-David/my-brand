
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');

form.addEventListener('submit',(e)=>{
    let emailRegex = /^([A-za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g
    if(!email.value.match(emailRegex)){
        e.preventDefault();
        email_error.innerHTML = "valid email address is required"
    }
    else{
        email_error.innerHTML = ""
    }
    if(password.value.length <= 5){
        e.preventDefault();
        password_error.innerHTML = "Password must be more than 6 characters"
    }
    else{
        password_error.innerHTML = ""
    }
})