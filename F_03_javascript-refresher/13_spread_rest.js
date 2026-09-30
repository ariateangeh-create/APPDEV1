const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log("New numbers:", newNumbers);

const user = {
  name: "Angelene",
  age: 21
};

const newUser = {
  ...user,
  course: "APPDEV1"
};

console.log("New user:", newUser);

function sum(...args) {
  return args.reduce((total, number) => total + number, 0);
}

console.log("Sum:", sum(5, 10, 15, 20));
