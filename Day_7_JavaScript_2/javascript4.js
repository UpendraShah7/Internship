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

