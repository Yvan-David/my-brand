
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
})
function loggedData(email){
    let logged_users = JSON.parse(localStorage.getItem("logged_users")) || [];
    if(!logged_users.some((v)=> v.email === email)){
        logged_users.push({"email":email})
        localStorage.setItem("logged_users",JSON.stringify(logged_users));
    }
    sessionStorage.setItem('logged', email)

}


document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is signed in
    if (isUserSignedIn()) {
        // Redirect to another page or perform actions
        redirectToDashboard();
    }

    function isUserSignedIn() {
        // Check if user information is available in session storage
        let logged = sessionStorage.getItem("logged");
        return logged !== null;
    }

    function redirectToDashboard() {
        let email = sessionStorage.getItem("logged");
        if (email === 'irankundayvan2020@gmail.com') {
            window.location.href = "/admin/index.html";
        } else {
            window.location.href = "/users/index.html";
        }
    }
});

function saveData() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    if (user_records.some((v) => v.email === email && v.password === password)) {
        alert("Login Successful");
        sessionStorage.setItem('username', user_records.find((v) => v.email === email).username);
        loggedData(email);
        redirectToDashboard();
    } else {
        alert("Incorrect Email or Password");
    }
}

function redirectToDashboard() {
    let email = sessionStorage.getItem("logged");
    if (email === 'irankundayvan2020@gmail.com') {
        window.location.href = "/admin/index.html";
    } else {
        window.location.href = "/users/index.html";
    }
}
