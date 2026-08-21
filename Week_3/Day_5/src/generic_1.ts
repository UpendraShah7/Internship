// //Generics
// function identity<T>(value: T): T {
//   return value;
// }

// const aaa = identity<string>('hello');
// const b = identity(42);
// console.log(aaa);
// console.log(b);

//Excercise
//return first element.
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}


//reurtn last element
function getLast<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}


//return reverse
function reverse<T>(item: T[]): T[] {
  return [...item].reverse();
}

// findbyID
// <T extends { id: number }>
// which means T can be any type, but that type MUST have an id property that is a number.
function findById<T extends { id: number }> ( arr: T[], id: number ): T | undefined {
  return arr.find((item) => item.id === id);
}

const nums = [10, 20, 30];
console.log(getFirst(nums));
console.log(getLast(nums));
console.log(reverse(nums));

// Strings
const words = ['apple', 'banana', 'cherry'];
console.log(getFirst(words));
console.log(reverse(words));

//Objects
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Ram' },
  { id: 2, name: 'Sita' },
  { id: 3, name: 'Hari' },
];

console.log(findById(users, 2)); // { id: 2, name: "Sita" }
console.log(findById(users, 99)); // undefined
