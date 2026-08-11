let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

if (a >= b && a >= c) {
    console.log("Largest number:", a);
} else if (b >= a && b >= c) {
    console.log("Largest number:", b);
} else {
    console.log("Largest number:", c);
}