//Build a program that removes duplicate values from an array and prints the unique elements.

let arr = prompt("Enter numbers separated by spaces:")
    .split(" ")
    .map(Number);

let unique = [];

for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}

console.log(unique);