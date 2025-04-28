document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
    document.getElementById('contactForm').reset();
});

document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    
    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);
    
    document.getElementById('bmiResult').innerText = 'Your BMI is: ' + bmi.toFixed(2);
});
