function validateName() {
    
    let nameUser = document.getElementById("name").value;

  if (nameUser ==="") {
    //Si no he escrito nada como nombre, mostrar mensaje de error.
    document.getElementById("error-name").innerText =
    "Please enter a name";
    document.getElementById("error-name").hidden = false;
  } else {
    okName = nameUser.value;
    console.log(okName);
  }
}
function validateEmail() {
  let email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("error-email").innerText =
      "Please enter a valid e-mail";
      document.getElementById("error-email").hidden = false;
  } else {
    okName = email;
    console.log(okName);
  }
}

function validatePhone() {
  let phone = document.getElementById("phone").value;

  if (phone === "") {
    document.getElementById("error-phone").innerText =
      "Please enter a valid phone number";
      document.getElementById("error-phone").hidden = false;
  } else {
    okName = phone;
    console.log(okName);
  }
}
function validateMessage() {
  let message = document.getElementById("message").value;
  if (message === "") {
    document.getElementById("error-text").innerText =
      "Please write at least 5 characters";
      document.getElementById("error-text").hidden = false;
  } else {
    okName = message;
    console.log(okName);
  }
}
document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});
