// A javascript object is an entity having state and behaviour. (properties and method) 

const student = {
    fullname : "Upendra shah",
    marks : 99,
    printMarks: function(){
        console.log("marks=", this.marks)
    }
};

// Prototype reference to an Object
// Classes themselves use prototypes internally.
//Creating prototypes in js
const Employee={
    calcTac(){
        console.log("Tax is 10%");
    }
}

const Amit={
    salary : 50000
}
    
Amit.__proto__= Employee;


const Ranjan={
    salary : 100000
}
    
Ranjan.__proto__= Employee;


const SudarShan={
    salary : 10000
}
    
SudarShan.__proto__= Employee;


const Prakash={
    salary : 120000,
    calcTac(){
        console.log("Tax is 20%"); //If prototype and object have same method object method is used.
    }
}
    
Prakash.__proto__= Employee;


// Classess

