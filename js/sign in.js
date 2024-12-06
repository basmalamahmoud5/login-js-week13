///all variable

let loginForm = document.getElementById("loginForm");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginAlert = document.getElementById("loginAlert");
let loginSuccessAlert = document.getElementById("loginSuccessAlert");
let usersArray = [];
///all variable

if (localStorage.getItem("all users") !== null) {
    usersArray = JSON.parse(localStorage.getItem("all users"));
}


loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    login();

})
function login() {
    let userData = {
        email: loginEmail.value,
        password: loginPassword.value

    }
    console.log(userData);
    if (isLoginValid(userData) == true) {
        console.log("you are looged in");
        loginSuccessAlert.classList.replace("d-none", "d-block")
        loginAlert.classList.replace("d-block", "d-none")
        setTimeout(function () {
            window.location.href = "welcome.html"
        },2000)

    } else {
        console.log("user not found")
        loginAlert.classList.replace("d-none", "d-block")
    }
}
function isLoginValid(userData) {
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email.toLowerCase() == userData.email.toLowerCase() && usersArray[i].password.toLowerCase() == userData.password.toLowerCase()) {
            console.log("user found");
            localStorage.setItem("userName",usersArray[i].name)
            return true
        }

    }
}


