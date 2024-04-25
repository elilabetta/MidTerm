

function validateName() {

    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let phone = document.getElementById('phone').value;
    let nameUser = document.getElementById("name").value;
    if (!nameUser.value) {
      //Si no he escrito nada como nombre, mostrar mensaje de error.
      document.getElementById("error-name").hidden = false;
      okName = false;
      console.log("Please introduce a name")
    } else {
      document.getElementById("errorName").hidden = true;
      nameUser.style.borderStyle = "none";
      okName = nameUser.value;
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