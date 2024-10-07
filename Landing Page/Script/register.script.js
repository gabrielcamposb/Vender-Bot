function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (username === '' || password === '' || email === '') {
        alert('All fields are required');
        return;
    }

    const user = {
        username: username,
        password: password,
        email: email
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
}