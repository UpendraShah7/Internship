//1. Loops in js
for (i=0; i <= 10; i++) {
    console.log(i);
}


//For Loop
//Calculate sum from 1 to n;
n = Number(prompt("Enter a number: "));
let sum = 0;
for(i=1; i <= n; i++) {
    sum += i;
}
console.log(sum);



//While Loop
let j=10;
while(j <= 20) {
    console.log(j);
    j++;
}



//do while loop
let k = 20;
do {
    console.log(k);
    k++;
}while(k <= 30);




//for of loop (for strings and arrays )
str1="Upesaandas";
for (let val of str1){
    console.log(val);
}


//for in loop (for objects)
let obj = {
    name: "Upesaandas",
    age: 20,
    city: "Kathmandu"
};

for (val in obj) {
    console.log(val + " : " + obj[val]);
};





//2. Strings in js
let str = "  Upesaandas  sasasa  ";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0));
console.log(str.trim());




//3.Template literals in js
let name = "Upendra";
let message = `Hello ${name}`;
console.log(message);
