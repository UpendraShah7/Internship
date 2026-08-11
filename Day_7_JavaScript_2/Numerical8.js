// Build a program that calculates an employee’s net salary after adding allowances and deducting taxes.

let basicSalary = Number(prompt("Enter basic salary:"));
let allowance = Number(prompt("Enter allowance:"));
let tax = Number(prompt("Enter tax:"));

let grossSalary = basicSalary + allowance;
let netSalary = grossSalary - tax;

console.log("Basic Salary:", basicSalary);
console.log("Allowance:", allowance);
console.log("Gross Salary:", grossSalary)
console.log("Tax:", tax);
console.log("Net Salary:", netSalary);