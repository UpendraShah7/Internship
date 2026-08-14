// console.log("one");
// console.log("two");

// function hello(){
//     console.log(" Hello Uppss")
// }

// setTimeout(hello , 2000)

// setTimeout( ()=>{
//     console.log(" Hello second Uppss")
// }
//  , 2000)

// console.log("three");




//  // Callbacks
//  // A callback is a fucntion passed as an argument to another funciton. 

//  function sum(a , b){
//     console.log(a+b);
//  }

//  function Calculator (a, b, sumCallback){
//     sumCallback(a,b);
//  }

// Calculator(2,3,sum);


// //Example this is also callback 
// const world = ()=>{
//     console.log("Hello"); 
// }

// setTimeout( world , 3000 );





// // Callback hell ( pyramid of doom )
// //Callback Hell occurs when multiple callbacks are nested inside one another, 
// // creating a pyramid-like structure (also called the Pyramid of Doom).
// //This makes the code difficult to read, understand, and maintain.

// function getData(getdata , nextData ){
//     setTimeout(()=>{
//         console.log("data:",getdata);
//          if (nextData){
//                 nextData();  //calls the callback
//                  }    
//     },3000);
   
// }

// getData(5, () => {
//     console.log("getting data 2....");
//     getData(6, () => {
//         console.log("getting data 3....");
//         getData(7);
//     });
// });




//Promise

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve(123);
//     reject("some error has occured");
// });

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    });
}


let promise = getData(123);
promise.then(()=>{
    console.log("Promise Fulfilled");
})


promise.catch(()=>{
    console.log("Network Error");
})
