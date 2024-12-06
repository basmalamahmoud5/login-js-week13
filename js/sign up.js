//all variable
let registerForm = document.getElementById("registerForm");
let signName = document.getElementById("signName");
let signEmail = document.getElementById("signEmail");
let signPassword = document.getElementById("signPassword");
let alertRequired = document.getElementById("alertRequired");
let existAlert = document.getElementById("existAlert");
let succesAlert = document.getElementById("succesAlert");
let usersArray = []
//all variable
let nameRegex = /^[a-zA-Z]{2,}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

let passwordRegex = /^(?=.*[A-Z]).{8,}$/;


if (localStorage.getItem("all users" != null)) {
    usersArray = JSON.parse(localStorage.getItem("all users"))
}

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (checkIfAllInputsAreValid()) {
        console.log("user is add");
        addUser()

    } else {
        console.log('error in data');

    }


})
function addUser() {
    let newUser = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value
    }
    if (isExist(newUser) == true) {
        console.log("email is already exist");
        existAlert.classList.replace("d-none", "d-block")
        succesAlert.classList.replace("d-block", "d-none")
    } else {


        console.log(newUser)
        usersArray.push(newUser);
        localStorage.setItem("all users", JSON.stringify(usersArray));
        succesAlert.classList.replace("d-none", "d-block")
        existAlert.classList.replace("d-block", "d-none")
        setTimeout(function () {
            window.location.href = "signin.html"
        },2000)

        console.log(usersArray);
        console.log("user is new");

    }




}
function isExist(newUser) {
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email.toLowerCase() == newUser.email.toLowerCase()) {
            console.log("email is ready exist");
            return true;
        }
    }
}




function validAllInputs(regex, element, massage) {
    let pattern = regex
    if (pattern.test(element.value) == true) {

        massage.classList.replace("d-block", "d-none")
        return true
    } else {
        massage.classList.replace("d-none", "d-block")
        return false
    }
}
function checkIfAllInputsAreValid() {
    if (validAllInputs(nameRegex, signName, alertRequired) && validAllInputs(emailRegex, signEmail, alertRequired) && validAllInputs(passwordRegex, signPassword, alertRequired)) {


        return true



    } else {
        return false

    }
}
