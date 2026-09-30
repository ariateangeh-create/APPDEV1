const hobbies = ["reading", "drawing", "playing guitar"];

hobbies.map(hobby => console.log("Hobby:", hobby));

const student = {
  name: "Angelene",
  age: 21
};

const { name, age } = student;
console.log("Name:", name);
console.log("Age:", age);

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log("Original:", numbers);
console.log("New:", newNumbers);
