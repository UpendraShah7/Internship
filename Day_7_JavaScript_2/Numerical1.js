let input = prompt("Enter numbers separated by commas:");

let numbers = input.split(",").map(Number);

let sum = numbers.reduce((total, val) => {
    return total + val;
}, 0);

console.log("Sum =", sum);