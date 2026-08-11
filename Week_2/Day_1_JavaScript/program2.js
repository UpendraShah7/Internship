let brithYear = Number(prompt("Enter your birth year:"));
let currentYear = new Date.getFullYear();  
let age = currentYear - brithYear;
console.log("Your age is:", age);
