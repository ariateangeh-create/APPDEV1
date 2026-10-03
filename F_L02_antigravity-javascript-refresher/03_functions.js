function greet(name) {
  return "Hello, " + name + "!";
}

const square = (num) => {
  return num * num;
};

function calculator(a, b) {
  return {
    sum: a + b,
    product: a * b
  };
}

console.log(greet("Angelene"));
console.log("Square:", square(7));
console.log("Calculator:", calculator(8, 4));
