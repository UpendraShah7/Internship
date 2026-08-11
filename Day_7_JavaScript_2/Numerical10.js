// Create a program that accepts a list of expenses and prints the total, average, and highest expense.

let expenses = prompt("Enter expenses:")
    .split(" ")
    .map(Number);

let total = 0;
let highest = expenses[0];
let n = expenses.length;

for (let i = 0; i < n; i++) {
    total += expenses[i];

    if (expenses[i] > highest) {
        highest = expenses[i];
    }
}

let average = total / n;

console.log("Total:", total);
console.log("Average:", average);
console.log("Highest:", highest);