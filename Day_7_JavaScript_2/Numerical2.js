// Create a program that finds and prints the largest number in a given array.


let numbers = prompt("Enter numbers separated by commas:")
    .split(",")
    .map(Number);

let largest = numbers.reduce((max, val) => {
    return val > max ? val : max;
});

console.log("Largest number =", largest);