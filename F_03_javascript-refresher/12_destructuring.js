const person = {
  name: "Angelene",
  age: 21
};

const { name, age } = person;
console.log(name, age);

const hobbies = ["reading", "drawing", "playing guitar"];
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

function printName({ name }) {
  console.log("Name:", name);
}

printName(person);
