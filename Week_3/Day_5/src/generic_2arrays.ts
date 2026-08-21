interface User {
  id: number;
  name: string;
}

function processArray<T>(items: T[]): {
  first: T | undefined;
  last: T | undefined;
  count: number;
  reversed: T[];
} {
  return {
    first: items[0],
    last: items[items.length - 1],
    count: items.length,
    reversed: [...items].reverse(),
  };
}

//passing no
const numbers: number[] = [10, 20, 30, 40];
const numResult = processArray(numbers);
console.log(numResult);

//passing strings
const names: Array<string> = ['Ram', 'Sita', 'Hari'];
const nameResult = processArray(names);
console.log(nameResult);

//passing objects
const users: User[] = [
  { id: 1, name: 'Ram' },
  { id: 2, name: 'Sita' },
];
const userResult = processArray(users);
console.log(userResult);
