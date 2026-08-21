// // Type annotation

// let a: number | boolean | string;
// a = 12;
// a = true;
// a = 'ups';

// // Type inference
// let studentName = 'Upendra'; // string
// let age = 22; // number
// let isStudent = true; // boolean

// let subjects = ['JavaScript', 'TypeScript', 'React']; // string[]
// let marks = [80, 90, 85]; // number[]

// let student = {
//   name: 'Upendra',
//   age: 22,
//   enrolled: true,
// }; // object

// function add(a: number, b: number) {
//   return a + b;
// } // return type inferred as number

// function greet(name: string) {
//   return 'Hello ' + name;
// }

// console.log(studentName);
// console.log(age);
// console.log(isStudent);
// console.log(subjects);
// console.log(marks);
// console.log(student);
// console.log(add(10, 20));
// console.log(greet('Upendra'));

// // Interfaces
// interface User {
//   name: string;
//   email: string;
//   password: string;
//   gender?: string;
// }
// function getData(obj: User): User {
//   const name = obj.name;
//   const email = obj.email;
//   const password = obj.password;

//   return { name, email, password };
// }

// function display(obj: User): void {
//   console.log(obj.name, obj.email, obj.password);
// }

// getData({ name: 'upendra', email: 'hasta@gmail.com', password: 'sadsadasd' });

// //Extending Interfaces
// interface Usser {
//   name: string;
//   email: string;
//   password: string;
//   gender?: string;
// }

// interface Admin extends Usser{
//   admin:boolean;
// }

// //Merging
// // interface ABCD {
// //   name: string;
// //   email: string;
// // }

// // interface ABCD {
// //   password :string ;
// // }

// // function display(obj:ABCD):void{
// //   obj.email;
// //   obj.password;
// //   obj.name
// // }

// // Type Aliases
// type sankhya = number;
// let aa:sankhya = 20;

//Generic Interfaces
interface Box<T> {
  contents: T;
}

const stringBox: Box<string> = { contents: 'hello' };
const numberBox: Box<number> = { contents: 42 };

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'Ram' },
  status: 200,
  message: 'OK',
};
