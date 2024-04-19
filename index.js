function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

// Usage
var bmi = bmiCalculator(65, 1.8);
console.log(bmi); // Output should be 20
