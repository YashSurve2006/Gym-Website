document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Client added successfully!');
    document.getElementById('registerForm').reset();
});
