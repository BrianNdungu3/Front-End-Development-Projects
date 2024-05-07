function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // convert height to meters

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    var bmi = weight / (height * height);

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI is ' + bmi.toFixed(2) + '.';
}
