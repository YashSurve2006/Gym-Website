// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission
  
    // Get the username and password entered by the user
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Predefined credentials for user and admin (these can be modified)
    var userCredentials = {
      username: 'user123',
      password: 'user'
    };
  
    var adminCredentials = {
      username: 'admin123',
      password: 'admin'
    };
  
    // Check if the entered credentials match the user or admin credentials
    if (username === userCredentials.username && password === userCredentials.password) {
      // Redirect to user portal if the credentials are correct
      window.location.href = 'user.html';  // Redirect to the user portal page
    } else if (username === adminCredentials.username && password === adminCredentials.password) {
      // Redirect to admin portal if the credentials are correct
      window.location.href = 'admin.html';  // Redirect to the admin portal page
    } else {
      // Display error message if credentials are incorrect
      alert('Invalid username or password. Please try again.');
    }
  });
  
  // Handle login link redirection
  document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default action (link behavior)
    
    // Navigate to login.html when the "Login" link is clicked
    window.location.href = 'login.html';  // Navigate to the login page
  });
  