const raw = " Angelene Ariate ";
const clean = raw.trim();

const [first, last] = clean.split(" ");

console.log("First name:", first.toUpperCase());
console.log("Contains Ariate:", clean.includes("Ariate"));
console.log("First five characters:", clean.slice(0, 5));
console.log(`Full name: ${first} ${last}`);

console.log("Parsed pixels:", parseInt("42px"));
console.log("Rounded number:", (19.9999).toFixed(2));

const result = "abc" / 2;
console.log("Invalid calculation:", result);
console.log("Is NaN:", Number.isNaN(result));
