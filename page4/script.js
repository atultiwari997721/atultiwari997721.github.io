document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Simple validation
    if (username === 'user' && password === 'pass') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        window.location.href = 'https://www.google.com'; // Redirect to Google
    } else {
        message.textContent = 'Invalid username or password';
        message.style.color = 'red';
    }
    if (username ==='atul' && password === 'atul') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        window.location.href = 'https://www.youtube.com'; // Redirect to Google
    } else {
        message.textContent = 'Invalid username or password';
        message.style.color = 'red';
        
    }
    if (username ==='mayank' && password === 'mayank') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        window.location.href = 'https://www.youtube.com/shorts/wGiDmoBN_NA'; // Redirect to Google
    } else {
        message.textContent = 'Invalid username or password';
        message.style.color = 'red';
        
    }
});
