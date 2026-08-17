let studentName: string = 'Ram';
let age: number = 22;
let isStudent: boolean = true;

let subjects: string[] = ['TypeScript', 'JavaScript', 'React'];
let marks: number[] = [85, 90, 78];

let studentInfo: [string, number, boolean] = [studentName, age, isStudent];

function calculateAverage(marks: number[]): number {
  let total: number = 0;

  for (let mark of marks) {
    total += mark;
  }

  return total / marks.length;
}

function displayStudent(): void {
  console.log('Student Name:', studentName);
  console.log('Age:', age);
  console.log('Student:', isStudent);
  console.log('Subjects:', subjects);
  console.log('Marks:', marks);
  console.log('Student Info:', studentInfo);
}

let average: number = calculateAverage(marks);

displayStudent();

console.log('Average Marks:', average);
