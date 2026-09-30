let favoriteFoods = ["Chicken", "Pizza", "Ice Cream"];

favoriteFoods.push("Fries");
favoriteFoods.shift();

console.log("Remaining foods:");
for (const food of favoriteFoods) {
  console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);
