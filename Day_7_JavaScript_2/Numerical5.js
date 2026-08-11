//Write a program that filters out only the even numbers from an array and prints them.

let arr = prompt("Enter numbers separated by spaces:")
    .split(" ")
    .map(Number);

let evenNumbers = arr.filter((num) => num % 2 === 0);

console.log(evenNumbers);