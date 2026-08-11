//Higher Order Methods
//A higher-order function (HOF) is a function that does at least one of these:
//Takes another function as an argument, OR
//Returns another function.


//1. forEach Loops in Array
let arr5=["apple", "banana","pineapple","mango"];
arr5.forEach((val , idx , arr)=>{
    console.log(val , idx , arr );
});


//Callback function
function greeting(para){
    console.log("Hello " + para)
}

function show(callback){
    callback("Upsdsdasdasdas")
}

show(greeting);



//print the squre using for each loop.
let numArray= [23, 12,5,23,45];
// numArray.forEach((val)=>{
//     console.log(val*val);
// });

let Print= (val)=>{
    console.log(val*val);

};


numArray.forEach(Print);




//Array Methods
// 1. Map

let numbs=[2,14,15,17,18];
let newNumbs = numbs.map((val)=>{
    return(val*val);
});

console.log(newNumbs);


// 2.Filter
let arrayyy = [5,6, 34 , 35 ,63, 64 ,23,36,12]

let evenArrayyy= arrayyy.filter((val)=>{
    return val%2==0;

});

console.log(evenArrayyy);



// 3. Reduce Method
let array10= [5,6, 34 , 35 ,63, 64 ,23,36,12];

const output=array10.reduce((result , current)=>{
     return result+current;
});

console.log(output);



//4.  find()
//find() is used to find the first element in an array that satisfies a condition.
let numbers = [10, 15, 330, 25, 30];

let resultt = numbers.find((val) => {
    return val > 18;
});

console.log(resultt);


// some()
// some() is a higher-order array method used to check whether at least one element in an array satisfies a condition.
// It returns a booleanvalue
let numbersss = [10, 15, 20, 25, 30];

let result = numbersss.some((val) => {
    return val > 25;
});

console.log(result);




// every()
//every() is a higher-order array method that checks whether ALL elements in an array satisfy a condition.
//It also returns a boolean Value.

let numbeers = [10, 20, 30, 40];

let ressult = numbeers.every((val) => {
    return val > 5;
});

console.log(ressult);