const score = 78;
const result = score >= 70 ? "Pass" : "Fail";
console.log("Result:", result);

const num = 12;
console.log(num % 2 === 0 ? "even" : "odd");

const user = {
  name: "Angelene"
};

console.log("City:", user.address?.city);

const age = 0;

console.log("Using ||:", age || 18);
console.log("Using ??:", age ?? 18);
