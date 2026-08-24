// Data types
//Primitive data types
//boolean
let isActive: boolean = true;
console.log(isActive);

//number
let item: number = 66;
console.log(item);

//string
let name: string = 'Ups';
console.log(name);

//Reference types
//{} [] ()

//Arrays
let arr: number[] = [12, 12, 234, 34, 23, 23];
console.log(arr);

let arr2: string[] = ['Ram', 'shyam', 'hari'];
console.log(arr2);

let arr3 = ['Ram', 123];

//Tuples
let tup: [string, number] = ['Ups', 20];
console.log(tup);

let tupp: [string, string, number] = ['sugam', 'radhi', 20];
console.log(tupp);

//typescript object types
const car: { name: string; model: string; year: number } = {
  name: 'BMW',
  model: 'Corolla',
  year: 2009,
};

//Enums
enum OrderStatus {
  PENDING = 'pending',
  SHIPPPED = 'shipped',
  CONFIRMED = 'confirmed',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
}

console.log(OrderStatus.PENDING);
console.log(OrderStatus.SHIPPPED);
console.log(OrderStatus.CANCELED);
console.log(OrderStatus.CONFIRMED);
console.log(OrderStatus.DELIVERED);

//any
let a;
a = 'str';
a = 20;
a = true;
a = {
  name: 'str',
  age: 39,
};

//unknown
let data: unknown = 'hello';
if (typeof data == 'string') {
  console.log(data);
}

//void
function abcd(): void {
  console.log('hello');
}

//null
//null means a variable has intentionally been given no value or an empty value.
let aa: null;

//undefined
//undefined means a variable has been declared but does not currently have a value assigned to it.
let hs: undefined;

//never
//is mainly used when a function or code path can never successfully finish or return a value.
//1. Function that always throws an error
//2. Infinite loop
//3. Exhaustive checking
// function bacd():never{
//     while (true){

//     }
// }
// bacd();
// console.log("dasdas");

//optional chaining
// let usser = null;

// user.address.city    //  Crashes: "Cannot read property of null"
// user?.address?.city  //  No crash, just returns: undefined

//Null coalsceing Operators ??
let username = null;
let displayName = username ?? 'Anonymous';
console.log(displayName); // "Anonymous"

//Another example
let settings = {
  volume: 0,
  brightness: null,
};
let volume = settings.volume ?? 50;
// yesle vanna khojeko chia settting ko volume null or undefined xa vanwe chai defualt value chai 50 rakhdeu.
let brightness = settings.brightness ?? 50;
// same goes for this
console.log(volume, brightness);

//Type annotation
//You explicitly tell TypeScript the type.

//Type inference
//TypeScript automatically figures out the type.

//interface
//An interface in TypeScript defines the shape of an object
//— what properties and methods it must have, without giving the actual implementation.
interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}
function getDataofUser(obj: User) {
  let name = obj.name;
  let email = obj.email;
  let password = obj.password;
  console.log(name, email, password);
}
getDataofUser({
  name: 'Upendra',
  email: 'hasta@gmail.com',
  password: 'Jhfvhnrifuf#789',
});

///Extending interfaces
interface abc {
  name: String;
  age: 20;
  gmail: string;
}

// Interface with arrays
interface Uuser{
  name:string;
  age:number;
}
const users:Uuser[]=[ {name:"Upendra" , age:20} ,{name:"sugam",age:20}]


interface def extends abc {
  reg: number;
  admin: boolean;
}

interface abcd{
  name: String;
  age: Number ;
}
interface abcd{
  admin:Number;
}

function admin(obj:abcd):void{
      obj.admin;
}



//Type aliases

type sankhya = number;
let aaa:sankhya=23;
console.log(aaa);


//Union and Intersection types
//Introduction to functions
//Function types
//Function rest pararmeters
// Fucntion overloading

function friends(...args:string[]){
  console.log(args);
}
friends("sdasd" ,"dasdasd","dasdadas"); 


//Generics