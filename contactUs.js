function validateForm() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let phone = document.getElementById('phone').value

    if (name === "") {
        document.getElementById('error-message').classList.add('error-message-red');
    } else if (email=== "") {
        document.getElementById('error-message').classList.add('error-message-red');
    } else if (phone === "") {
        document.getElementById('error-message').classList.add('error-message-red');
    } else if (message=== "") {
        alert("Please insert at least 5 characters");
    } else {
        console.log(name, email, message);
    }
}

document.getElementById("myForm").addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
})