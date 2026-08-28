// STUDENT PROFILE

let name: string = "Fulvia";
let age: number = 32;
let isEnrolled: boolean = true;

const describeStudent = (name: string, age: number): string => {
  return `${name} is ${age} years old`;
};

console.log(describeStudent(name, age));