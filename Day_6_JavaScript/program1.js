let weight = Number(prompt("Enter your weight in kg:"));
let height = Number(prompt("Enter your height in meters:"));

let bmi = weight / (height ** 2);

console.log("Your BMI is:", bmi);