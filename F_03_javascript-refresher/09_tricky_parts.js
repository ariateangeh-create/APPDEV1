console.log('5 == "5":', 5 == "5");
console.log('5 === "5":', 5 === "5");

let notDefined;
let empty = null;

console.log("notDefined:", notDefined);
console.log("empty:", empty);

const student = {
  name: "Angelene",

  regularMethod: function () {
    console.log("Regular method this.name:", this.name);
  },

  arrowMethod: () => {
    console.log("Arrow method this.name:", this.name);
  }
};

student.regularMethod();
student.arrowMethod();

const original = ["HTML", "CSS", "JavaScript"];

const copyByReference = original;
copyByReference.push("React");

console.log("Original after reference copy:", original);

const copyBySpread = [...original];
copyBySpread.push("Git");

console.log("Original after spread copy:", original);
console.log("Spread copy:", copyBySpread);
