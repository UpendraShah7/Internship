"use strict";
// Core Data Setup
Object.defineProperty(exports, "__esModule", { value: true });
const students = [
    { id: 101, name: "Upendra", isEnrolled: true, grade: 90 },
    { id: 102, name: "anish", isEnrolled: true, grade: 89 },
    { id: 102, name: "manish", isEnrolled: true, grade: 99 },
    { id: 102, name: "santosh", isEnrolled: true, grade: null },
];
const grades = students
    .map(s => s.grade)
    .filter((g) => {
    return g !== null;
});
function analyzeGrades(grades) {
    const total = grades.reduce((sum, g) => sum + g, 0);
    const average = Math.round((total / grades.length) * 100) / 100;
    const highest = Math.max(...grades);
    const lowest = Math.min(...grades);
    const passing = grades.filter(g => g >= 60).length;
    return { total, average, highest, lowest, passing };
}
console.log(analyzeGrades(grades));
const upendraCourses = [
    ["Advanced Java Programming", 3, true],
    ["Software Project Management", 3, false],
    ["Data Warehousing and Data Mining", 3, false]
];
console.log(upendraCourses);
let schoolName = "Coding Academy";
// TypeScript infers this as the general type 'string', not the literal
// "Coding Academy", because 'let' variables are assumed reassignable —
// so TS widens the type instead of locking it to one specific value.
let schoolName2 = "Coding Academy";
//# sourceMappingURL=Student_Grade_Management.js.map