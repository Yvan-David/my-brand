
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');

form.addEventListener('reset',(e)=>{
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
    // if(!((username.value === '' || username.value == null) || (!email.value.match(emailRegex)) || (password.value.length <= 5)) )
    //     {saveData()}
})
function loggedData(){
    let email, password;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    let logged_user = new Array();
    logged_user = JSON.parse(localStorage.getItem("logged_users"))?JSON.parse(localStorage.getItem("logged_users")):[];
    if(logged_user.some((v)=>{
        return v.email == email
    })){
        //alert("already logged in")
    }
    else{
        logged_user.push({
            "email":email,
            "password":password,
        })
        localStorage.setItem("logged_users",JSON.stringify(logged_user));
        //localStorage.clear();
    }

}


function saveData(){
    let email, password;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    let logged_user = new Array();
    let user_records= new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(user_records.some((v)=>{
        return v.email == email && v.password == password
    })){
        alert("Login Successful")
        logged_user.push(user_records.filter((v)=>{
            return v.email==email  && v.password==password
        })[0])
        loggedData();
        sessionStorage.setItem('username',`${(user_records.filter((v)=>{
            return v.email==email  && v.password==password
        })[0]).username}`)
        if((user_records.filter((v)=>{
            return v.email=='irankundayvan2020@gmail.com'  && v.password=='asdfghj'
        })[0])){
            window.location.href="/admin/index.html"
        }
        else{
            window.location.href="/users/index.html"
        }
    }
    else{
        alert("Incorrect Email or Password")
    }
}