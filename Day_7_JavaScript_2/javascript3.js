
// Function in js
function myFunc(){
    console.log("Internship Task");
    console.log("Week 2 Day3");
}

myFunc();



// Function Declaration
// A function declaration is a way to define a function using the function keyword.
function functionName() {
    // code to execute
}


//Function Expression
// A Function stored in a variable is called function expression.
const greet = function() {
    console.log("Hello Function Expression");
};

greet();




//Arrow Function
const add = ( a , b) =>{
    return (a+b);
}
console.log(add(5,4));



//Default parameter
function Greetings(name = "Guest"){
    console.log("Hello " + name);
}
Greetings();
Greetings("Ups");



//Rest Parameter
function addd(...numbers){
    let sum=0;
    for( let val of numbers){
        sum += val;
    }
    return sum;
}
result = addd(2,5,6,2,3);
console.log(result);




//Spread Operators
let fruits = ["apple", "banana"];
let moreFruits = [...fruits, "mango"];

console.log(moreFruits); // ["apple", "banana", "mango"]



const arr1= {
    name:" Upendra Shah",
    age:23,
    salary:1500
}


const arr2= {
    ...arr1,
    age:40
}
console.log(arr2);




//Pactice
function sum (a , b){
    s = a + b;
    return s;   
}
let val = sum(10 ,30 );
console.log(val);

//same function
const arrowMul=(a,b)=>{
    let mul = a*b;
    return mul;
}
console.log(arrowMul(3,4));

 

