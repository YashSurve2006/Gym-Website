document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;

    if (userId === 'admin' && password === 'admin') {
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'user.html';
    }
});
