var age;
age=25;
console.log(age);

//var is redeclarable and reassignable and has function scope. 

let name;
name="Upskill";
console.log(name);

//let is not redeclarable but is reassignable and has block scope.


const country="Nepal";
console.log(country);

//const is not redeclarable and not reassignable and has block scope.


// 1. String
let name = "Upskill";

// 2. Number
let age = 25;

// 3. Boolean
let isStudent = true;

// 4. Undefined
let address;

// 5. Null
let phone = null;

// 6. BigInt
let bigNumber = 12345678901234567890n;

// 7. Symbol
let id = Symbol("id");

// 8. Object
let student = {
    name: "Upskill",
    age: 25
};

// 9. Array
let subjects = ["JavaScript", "React", "CSS"];

// 10. Function
function greet() {
    console.log("Hello!");
}


// Printing the values
console.log(name);
console.log(age);
console.log(isStudent);
console.log(address);
console.log(phone);
console.log(bigNumber);
console.log(id);
console.log(student);
console.log(subjects);
greet();




let weight = Number(prompt("Enter your weight in kg:"));
let height = Number(prompt("Enter your height in meters:"));

let bmi = weight / (height ** 2);

console.log("Your BMI is:", bmi);