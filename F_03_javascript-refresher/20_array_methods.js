const students = [
  { name: "Angelene", grade: 88 },
  { name: "Mark", grade: 95 },
  { name: "Jasmine", grade: 55 }
];

const passing = students.filter(student => student.grade >= 60);
console.log("Passing students:", passing.map(student => student.name));

const mark = students.find(student => student.name === "Mark");
console.log("Found student:", mark);

console.log("Some student failed:", students.some(student => student.grade < 60));
console.log("Every student passed:", students.every(student => student.grade >= 60));

const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log("Ranking:", ranked.map(student => student.name));
