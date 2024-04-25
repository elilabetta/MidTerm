let okName = "";

function validateForm() {


    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let phone = document.getElementById('phone').value

    if (name === "") {
        document.getElementById('error-message').classList.add('error-message-red');
        console.log("please introduce your name");
    } else if (email=== "") {
        document.getElementById('error-message').classList.add('error-message-red');
        console.log("please introduce email");
    } else if (phone === "") {
        document.getElementById('error-message').classList.add('error-message-red');  
        console.log("please introduce the phone number");
    } else if (message=== "") {
        alert("Please insert at least 5 characters");
    } else {
        console.log(name, email, message);
    }
}

function validateName(){
    let name = document.getElementById('name').value;
    if (name === "") {
        document.getElementById("error-name").hidden = true;
        okName= false;
    } else {
        document.getElementById("error-name").hidden = false;
        okName = name;
        console.log(okName);
    }
}
function validateEmail(){
    let name = document.getElementById('email').value;
    if (name === "") {
        document.getElementById("error-name").innerText = "Please enter a valid e-mail"
    } else {
        okName = name;
        console.log(okName);
    }

}

function validatePhone(){
    let name = document.getElementById('phone').value;
    if (name === "") {
        document.getElementById("error-name").innerText = "Please enter a valid phone number"
    } else {
        okName = name;
        console.log(okName);
    }

}
function validateMessage(){
    let name = document.getElementById('message').value;
    if (name === "") {
        document.getElementById("error-name").innerText = "Please write at least 5 characters"
    } else {
        okName = name;
        console.log(okName);
    }

}
document.getElementById("myForm").addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  
})