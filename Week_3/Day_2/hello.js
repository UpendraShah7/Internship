"use strict";
// 1. Basic Types
let studentName = "Ram";
let age = 22;
let isStudent = true;
// 2. Array
let subjects = ["TypeScript", "JavaScript", "React"];
let marks = [85, 90, 78];
// 3. Tuple
let studentInfo = [
    studentName,
    age,
    isStudent
];
// 4. Function with types
function calculateAverage(marks) {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    return total / marks.length;
}
// 5. Function with void
function displayStudent() {
    console.log("Student Name:", studentName);
    console.log("Age:", age);
    console.log("Student:", isStudent);
    console.log("Subjects:", subjects);
    console.log("Marks:", marks);
    console.log("Student Info:", studentInfo);
}
// 6. Calculate average
let average = calculateAverage(marks);
// 7. Display result
displayStudent();
console.log("Average Marks:", average);
