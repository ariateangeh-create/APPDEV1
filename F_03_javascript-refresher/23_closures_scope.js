if (true) {
  let insideBlock = "Only visible inside this block";
  console.log(insideBlock);
}

try {
  console.log(insideBlock);
} catch (error) {
  console.log("insideBlock is not defined out here");
}

function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log("Counter A:", counterA());
console.log("Counter A:", counterA());
console.log("Counter B:", counterB());
