// Creating Objects

const Student ={
    name : "Ram" ,
    age  : 20  ,
    course : "CSIT"
}

console.log(Student.name);
console.log(Student.age);



// Nested Objects

let student = {
    name : "Ram",
    age : 20 ,
    address :{
        city : "Kathmandu" ,
        country : "Nepal"
    }
}

console.log(student.address.city);
console.log(student.address.country);



// Methods in Objects
let Employee = {
    name : "Ram",
    Salary : 50000,
    age : 30,

    // greet: function(){
    //     console.log("Hello");
    // }

    greet(){
        console.log("Methods in Object Example");
        }
}

Employee.greet();



//Object.Keys,  Object.Values  ,Object.entries
let sttudent = {
    name: "Ram",
    age: 20,
    course: "BIT"
};

console.log(Object.keys(sttudent));
console.log(Object.values(sttudent));
console.log(Object.entries(sttudent));





// Destrucutring in objects
let s = {
    name : "Ups",
    age : 22
};

let n1 = student.name ;
let a1 = student.age;


// With destructuring
let { name ,age }= s;
console.log(name);
console.log(age);



// Destructuring in Array
let fruits = ["Apple", "Mango", "Banana", "Grapes" ,"SweetPotato" ,"Tomato"];

let [first, second, third, ...rest] = fruits;

console.log(first);  // Apple
console.log(second); // Mango
console.log(third);  // Banana
console.log(...rest); // Grapes SweetPotato Tomato




//Spread Operator
//The spread operator (...) in JavaScript is used to expand or 
// spread the elements of an array or the properties of an object into another place.

//copy an array
let nnumbers = [10, 20, 30];
let copy = [...nnumbers];
console.log(copy);


// Adding new value to the existing array
let newNumbers = [...nnumbers , 40 ,50]
console.log(newNumbers);


//Combining two arrays
let boys = ["Ram" , "Shyam"];
let girls = ["Sita", "Samiksya"]
let nbg =[...boys ,...girls];
console.log(nbg);


//Spread with a string
let name = "Ups";
let letters = [...name];
console.log(letters);
//Output :["U", "p", "s"]




// Adding a property to an object
let student = {
    name: "Ups",
    age: 22
};

let newStudent = {
    ...student,
    city: "Kathmandu"
};

console.log(newStudent);



//Updating an object property
let student = {
    name: "Ups",
    age: 22
};

let updatedStudent = {
    ...student,
    age: 23
};

console.log(updatedStudent);