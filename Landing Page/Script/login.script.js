document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.querySelector('.login-button');
    
    loginButton.addEventListener("mouseover", function () {
        loginButton.style.backgroundColor = "#08240d";
    });
    
    loginButton.addEventListener("mouseout", function () {
        loginButton.style.backgroundColor = "";
    });
});

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('All fields are required');
        return;
    }

    const storedUser = localStorage.getItem(username);

    if (!storedUser) {
        alert('User not found');
        return;
    }

    const user = JSON.parse(storedUser);

    if (user.password !== password) {
        alert('Incorrect password');
        return;
    }

    alert('Login successful!');
}