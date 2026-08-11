// Create a program that stores student names and marks, calculates their percentage, and displays 
// whether they passed or failed.

let name = prompt("Enter student name:");

let marks = prompt("Enter marks of 5 subjects:")
    .split(" ")
    .map(Number);

let total = marks.reduce((sum, mark) => sum + mark, 0);

let percentage = total / 5;

console.log("Student Name:", name);
console.log("Total Marks:", total);
console.log("Percentage:", percentage + "%");

if (percentage >= 40) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}