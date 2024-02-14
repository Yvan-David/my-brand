const username = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');

form.addEventListener('submit',(e)=>{
    let emailRegex = /^([A-za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g
    if(username.value === '' || username.value == null){
        e.preventDefault();
        name_error.innerHTML = "Name is required"
    }
    else{
        name_error.innerHTML = ""
    }
    
    if(!email.value.match(emailRegex)){
        e.preventDefault();
        email_error.innerHTML = "valid email address is required"
    }
    else{
        email_error.innerHTML = ""
    }
})