//Write a program that accepts an array of numbers and calculates the sum of all elements.

let input = prompt("Enter numbers separated by commas:");

let numbers = input.split(",").map(Number);

let sum = numbers.reduce((total, val) => {
    return total + val;
}, 0);

console.log("Sum =", sum);