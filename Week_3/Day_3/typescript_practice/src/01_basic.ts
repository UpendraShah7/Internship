//Primitive Data types
let username:string = "Ups";
let age:number =27;
let isBoolena:boolean = true;

//Arrays
let numbers: number[] = [12 ,14, 16,17,18];
let Names: string[] = ["Upendra" , "sujal" , "mahato"];


//Tuples
let personData:[string, number] = ["Ups" , 20];
// let personData:[string, number] = [20 , :"Ups"]; mistake



//Enums
enum Direction{
    Up,
    Left,
    Right,
    Down
}

let dr : Direction = Direction.Right;
console.log(dr);


enum Status{
    Pending="pending",
    Success="succes",
    Failed="failed"
}
let status : Status = Status.Success;
console.log(status);


//Any (avoid when possible)
let randomVaraiable : any =10;
randomVaraiable = "Upendra";
console.log(randomVaraiable);
randomVaraiable = true;
console.log(randomVaraiable);



//unknown (safer than any)
let userInput:unknown;
userInput=10;
userInput="Santosh"


function Task():void{
    console.log("perform task")
}

//undefined 
let name: string | undefined;

//null  
let namee: string | null = null;


//never

//never represents the value  that never occurs
//This function never returns a value because it always throws an error.    
function throwError(message:string):never{
    throw new Error(message);
}   

// this function never finsihses so it has return type of never
function infiniteLoop(): never {
    while (true) {
        console.log("Running...");
    }
}


//Interface object ko shape banxa
interface User {
    name: string;
    email: string;
    password: string;
}

function createUser( name:string , email : string , password:string):User{
    return({name ,email, password});
}
function displayUser(user:User):void{
      console.log(`Name: ${user.name}, Email: ${user.email} ,${user.password} `);
}   
const user = createUser("Upendra", "upendra@gmail.com", "securePass123");
displayUser(user);

//? optional parameter if we want somefield to be optional

// Extendiing Interafaces
interface Userr {
  name: string;
  email: string;
}

interface Admin extends Userr {
  role: string;
}

const admin: Admin = {
  name: "Upendra",
  email: "up@gmail.com",
  role: "Admin"
};

console.log(admin);


//Type alliases
type UserName = string;
let nameee: UserName = "Upendra";
console.log(nameee);

//Object Example
type Uuser = {
  name: string;
  age: number;
};

const uuser: Uuser = {
  name: "Upendra",
  age: 22
};

//Type aliases are especially useful for union types:
type Sstatus = "success" | "error" | "loading";
let sstatus: Sstatus = "success";
console.log(sstatus);



//Type Intersection
type Person = {
 name: string;
};

type Employee = {
 employeeId: number;
};

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
 name: "Alice",
 employeeId: 101
}

//rest parameters
function addNumbers(...numbers: number[]): number {
 let total = 0;

 for (const number of numbers) {
   total += number;
 }

 return total;
}





