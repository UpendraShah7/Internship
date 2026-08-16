// A javascript object is an entity having state and behaviour. (properties and method) 

const student = {
    fullname : "Upendra shah",
    marks : 99,
    printMarks: function(){
        console.log("marks=", this.marks)
    }
};


// A special property is called prototype. which is also an object.
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
// classes are  program-code template for creating objects.

class TyotaCar{

    constructor(brand ,milege){
        console.log("Creating new objects");
        this.brand = brand ;
        this.milege = milege;
    }


    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");

    }
}
let fortuner = new TyotaCar("fortuner" , 20); 
let lexus = new TyotaCar("lexus" , 10);




// constuctor() method is used to initialize objects.

//Inheritence
class Car {
    start() {
        console.log("Car started");
    }

    stop() {
        console.log("Car stopped");
    }
}

class Toyota extends Car {
    constructor(brand) {
        super();  
        this.brand = brand;
    }

    showBrand() {
        console.log(this.brand);
    }
}

let fortuner = new Toyota("Fortuner");

fortuner.start();      // Car started
fortuner.stop();       // Car stopped
fortuner.showBrand();  // Fortuner
