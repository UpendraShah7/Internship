//Arrays in js
let heros =["Superman", "Batman", "Spiderman"]; 

// Creating Arrays
let arr = [1, 2, 3];        // array literal 
let arr2 = new Array(1, 2, 3); // Array constructor



//Accessing array elements
console.log(heros[0]); // Superman
console.log(heros[1]); // Batman
console.log(heros[2]); // Spiderman
console.log(heros.length); // 3


//Updating array elements
let arr4 = [10, 20, 30];
arr4[1] = 25;        // update by index [10, 25, 30]
arr4.push(40);        // add to end  [10, 25, 30, 40]
arr4.pop();            // remove from end  [10, 25, 30]
arr4.unshift(5);       // add to start  [5, 10, 25, 30]
arr4.shift();          // remove from start [10, 25, 30]




//Array Methods

let arr3=[20, 30, 40, 50, 60];

arr3.push(35); // adds 35 to the end of the array
console.log(arr3); 

arr3.pop(); // removes the last element from the array
console.log(arr3);

let v= arr3.toString(); // converts the array to a string
console.log(v);


let marvel_heros = ["Ironman", "Thor", "Hulk", "Captain America"];
let dc_heros = ["Superman", "Batman", "Wonder Woman"];
//Concatenation two arrays

marvel_heros = marvel_heros.concat(dc_heros);
console.log(marvel_heros); 

//Shift and Unshift
console.log(dc_heros.unshift("Flash"));
console.log(dc_heros);

// console.log(dc_heros.shift());
// console.log(dc_heros);

 

//Slice and Splice
console.log(marvel_heros.slice(1,3));


//Syntax: array.splice(start, deleteCount, item1, item2, ...)
marvel_heros.splice(2, 0, "Black Panther", "Doctor Strange");
console.log(marvel_heros);