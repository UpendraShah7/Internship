// Write a program that takes a list of items with prices and quantities, then calculates the total bill.

let items = prompt("Enter item names separated by spaces:")
    .split(" ");

let prices = prompt("Enter prices separated by spaces:")
    .split(" ")
    .map(Number);

let quantities = prompt("Enter quantities separated by spaces:")
    .split(" ")
    .map(Number);

let total = 0;

for (let i = 0; i < items.length; i++) {
    let amount = prices[i] * quantities[i];

    console.log(
        items[i] + " = " + prices[i] + " x " + quantities[i] + " = " + amount
    );

    total += amount;
}

console.log("Total Bill:", total);


