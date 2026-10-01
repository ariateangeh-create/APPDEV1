# JavaScript Refresher Reflection
### 00_script_in_html.html
In part 00, I learned that JavaScript can be placed inside HTML and how it interacts with other JavaScript files. I encountered three console errors related to 15_modules, export.js, and the CORS policy. To resolve this, I installed and ran a live server; it took three attempts before it worked and the errors disappeared. Everything is now functioning correctly, the inline JavaScript, module scripts, and import/export connections. I realized the importance of knowing how to properly use the browser and console. For example:<script type="module"src="15_modules_export.js"></script>

### 01_base_syntax.js
In Part 1, one of the important concepts I learned is case sensitivity, such as:  let myName = "Angelene"; let myname = "Ariate";  console.log(myName); console.log(myname);  We created myName and myname with different values to demonstrate that JavaScript is case-sensitive; for example: console.log("Hello JavaScript");  I also noticed some unrelated files in the APPDEV1 report, so I didn't run git add immediately. After running git status, I pushed the changes to GitHub.

### 02_variables.js
In Part 2, there are three variables: name` (String), age (Number), and isStudent (Boolean).  The typeof operator is used to determine the data type held by a variable. I learned that == represents loose equality, meaning type conversion can occur, while tha === represents strict equality, which checks both the value and the data type. 

### 03_functions.js
In Part 3, I learned that functions can be used to organize code and avoid repeating the same instructions. We created a greet function; so, when we call it. For example, greet("Angelene"), it returns "Hello, Angelene." In this section, there are two inputs, a and b. It returns an object containing the sum and product. For example, calculator(8, 4) results in: sum: 12 product: 32  And here is how we call the functions: console.log(greet("Angelene")); console.log("Square:", square(7)); console.log("Calculator:", calculator(8, 4));

### 04_objects.js
In part 4, I learned that using personal development as an example helps me understand how it works more easily. I also learned that it is possible to add a new property. For example: aboutMe.hobby = "Coding";—or to change the value, such as replacing "coding" with "playing guitar." For example: aboutMe.hobby = "coding"; Changed to: aboutMe.hobby = "playing guitar";

### 05_arrays.js
In Part 5, I learned that push() adds an item to the end of an array. For example: ["Chicken", "Pizza", "Ice Cream", "Fries"]. Meanwhile, shift() is used to remove the first item, so "Chicken" would be removed. I also used map(), which creates a new array based on each item.

### 06_control_structures.js
In Part 6, three concepts were used, and these are: if/else, for loop, and while loop. With the while loop, it starts at count = 0. For example, with each iteration: count++; This means the count increases by 1, so "Hello" would appear three times, for instance. Example:
While loop:
Hello
Hello
Hello

### 07_dom.html
In Part 7, we used the browser because it involves the DOM and an HTML file. I learned here that getElementById() is used to locate an HTML element using its ID. Then, regarding the button.addEventListener("click", () => { part: when the button is clicked, the code inside executes. For example, const color = prompt("What color should the background be?"); asks for a color input. If you provide a color, it changes the webpage's background. I tested this in the browser, entered a color, and it worked, so I committed and pushed the changes.

### 08_essential_features.js
In Part 8, we utilized three main concepts. First is map(), which iterates through each item in the hobbies list and prints them. Second is Destructuring, which extracts the name and age properties from the student object. Third is the Spread Operator (...), which copies the contents of the number array into a new array and adds new numbers at the end. For instance, if the array is [1, 2, 3], applying the spread operator allows you to append numbers; adding two numbers would result in [1, 2, 3, 4, 5]. In this section, I added more hobbies to personalize the content and included numbers to demonstrate the spread operator.

### 09_tricky_parts.js
Regarding Part 9, I found the tricky aspects, specifically the difference between == and === so challenging. One evaluates to true while the other evaluates to false. I also looked at Regular versus Arrow functions, as well as reference copies versus spread copies; each has distinct behaviors, and this section highlights those differences.

### 10_let_const.js
In Part 10, I learned that let can be reassigned, while the cons cannot reassigned after giving it a value. I also learned that var is a way of declaring variables. For example I can change the value of a variable that is declared with let, but when I tried to change the variable that is declared with const, it caused an error because const cannot be reassigned.
let age = 21;
age = 22;
console.log(age); // 22

### 11_arrow_functions.js
In Part 11, I didn't encounter many errors; the work involved was minimal, and I proceeded to commit and push the changes. I learned that arrow functions provide a more concise way to write functions, making the code simpler and easier to read. For example: const square = number => number * number; console.log(square(9));

### 12_destructuring.js
In Part 12, I learned that destructuring allows for the extraction of values from arrays or objects; it also helps shorten the code when you only need specific information. Example: const student = { name: "Angelene", age: 21 }; const { name, age } = student; console.log(name, age);

### 13_spread_rest.js
In Part 13, I learned that the spread operator is used to copy and combine values, whereas the rest operator collects multiple values. For Example: const numbers = [1, 2, 3]; const newNumbers = [...numbers, 4, 5]; console.log(newNumbers);

### 14_classes_inheritance.js
In part 14, I learned that we can use a class to create an object. I also learned how to utilize inheritance features from one class to another. For example: class Student { constructor(name) { this.name = name; } introduce() { console.log(Hi, I'm ${this.name}); } } const student = new Student("Angelene"); student.introduce();

### 15_modules_export.js
In Part 15, I learned that JavaScript code can be separated into modules. For example: export default function greet() { console.log("Hello!"); } Regarding the code export process, I also realized that it is possible for there to be no output, yet this does not necessarily mean there is an error. 

### 16_modules_import.js
In Part 16, I learned how to import functions and information from another JavaScript file. For example: import greet, { userInfo } from "./15_modules_export.js"; greet(); console.log(userInfo);

### 17_logical_operators.js
In Part 17, I learned about "truthy" and "falsy" values and how they work. Operators like AND (&&), OR (||), and NOT (!) are used to create conditions. For Example: const username = "Angelene"; if (username && username.length > 0) { console.log("Username is valid"); }

### 18_ternary_nullish.js
 Part 18, I learned that the ternary operator allows us to write simple conditions more concisely. For example: const age = 21; const result = age >= 18 ? "Adult" : "Minor"; console.log(result);

### 19_strings_numbers.js
In Part 19, I learned that NaN occurs when the result is not a valid number. For example: const name = "Angelene Ariate"; console.log(name.toUpperCase());  console.log(Number("42"));

### 20_array_methods.js
In Part 20, array methods such as filter(), find(), some(), every(), and sorting were used. I learned that these methods are important for easily searching, filtering, and checking data. For example: const grades = [90, 85, 70, 95]; const passing = grades.filter(grade => grade >= 75);` console.log(passing);

### 21_errors_json.js
In Part 21, I learned that try...catch handles errors without stopping the program. I also learned that JSON allows for conversion between strings and JS Objects. For example: const student = {` name: "Angelene", age: 21};const jsonData = JSON.stringify(student); console.log(jsonData);

### 22_async_javascript.js
In Part 22, I learned that JavaScript also has asynchronous operations (callbacks and async/await). At first, I was confused by asynchronous code, but based on the examples I saw, I gained a better understanding of how JavaScript waits for results. For Example: async function getStudent() {const student = await getData();console.log(student);}

### 23_closures_scope.js
In part 23, I learned that block scope means a variable declared inside a block that can only be used within that block. Also I learned that closure use variable from it's function outside even after it's function has finished. A first I was very confusing but I now understand that every counter has its own count. For example: counterA and counterB, they keep separate counts because each time createCounter() is called, and then the new count variable is created. Each counter function remembers its own count, so if I call counterA() twice, it becomes 2, while counterB() starts separately at 1. 
const counterA = createCounter();
const counterB = createCounter();
console.log("Counter A:", counterA()); // 1
console.log("Counter A:", counterA()); // 2
console.log("Counter B:", counterB()); // 1

## Final Reflection
The easiest part for me was Part 1 and Part 2 because the concepts were easier to understand, especially variables, data types, and basic JavaScript syntax. I was able to follow the examples and run the code without too many problems.

The part that took the most effort for me was Part 00 and Part 09. In Part 00, I encountered errors with the module and CORS policy, so I had to use Live Server and try several times before it worked. In Part 09, I found some concepts tricky, especially the difference between == and ===, regular and arrow functions, and reference copies versus spread copies.

The JavaScript concept I feel more confident using now is functions and arrays. I understand better how to create functions, pass values to them, and use array methods such as map(), filter(), and find(). I also became more comfortable with destructuring and the spread operator.

Before using JavaScript in React, I still need to practice asynchronous JavaScript, objects, array methods, and functions more. I understand the basic concepts, but I still need more practice so I can write the code without always depending on examples. I also want to improve my understanding of how JavaScript works with React components because I know that JavaScript is an important part of building React applications.
