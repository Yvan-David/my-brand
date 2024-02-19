const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');

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
    if(password.value.length <= 5){
        e.preventDefault();
        password_error.innerHTML = "Password must be more than 6 characters"
    }
    else{
        password_error.innerHTML = ""
    }
    if(!((username.value === '' || username.value == null) || (!email.value.match(emailRegex)) || (password.value.length <= 5)) )
        {saveData();}
})
/* ----- function that saves input data ------ */
function saveData(){
    let username, email, password;
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    let user_records= new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(user_records.some((v)=>{
        return v.email == email
    })){
        alert("duplicate email")
    }
    else{
        user_records.push({
            "username":username,
            "email":email,
            "password":password,
        })
        localStorage.setItem("users",JSON.stringify(user_records));
        //localStorage.clear();
    }

}