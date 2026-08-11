//Write a program that reverses the order of elements in an array and prints the result.

let arr = prompt("Enter numbers separated by spaces:")
    .split(" ")
    .map(Number);

let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed);