const values = [0, "", "hello", null, undefined, [], {}];

values.forEach((value) => {
  if (value) {
    console.log(value, "-> truthy");
  } else {
    console.log(value, "-> falsy");
  }
});

const username = "Angelene";
const password = "jsPractice123";

const canLogIn = username !== "" && password !== "";
console.log("Can log in:", canLogIn);

const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;

console.log("Can watch:", canWatch);
console.log('"" || "default":', "" || "default");
console.log('username && "Welcome!":', username && "Welcome!");
console.log("!canLogIn:", !canLogIn);
