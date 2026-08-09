let usd = Number(prompt("Enter amount in USD:"));
let rate = Number(prompt("Enter current USD to NPR exchange rate:"));

let npr = usd * rate;

console.log("Amount in NPR:", npr);