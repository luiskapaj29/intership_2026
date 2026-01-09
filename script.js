// HTML CSS gjenerated using ChatGPT
/*
//1.4 ex 1 
console.log("Hello, World!");

//1.4 ex 2
let studentName = "Luis";
let sessionNum = 3;
const isOnline = true;  

console.log(studentName, typeof studentName);
console.log(sessionNum, typeof sessionNum);
console.log(isOnline, typeof isOnline);

//1.4 ex 3
let tasks = [];

tasks.push({
  title: "Go grocery shopping",
  completed: true
});

tasks.push({
  title: "Work out",
  completed: false
});


console.log(tasks);

//1.4 ex 4
function describeTask(task) {
  return `The task "${task.title}" is ${task.completed ? 'completed' : 'not completed'}.`;
}

console.log(describeTask(tasks[0]));

//1.4 ex 5
function isTaskDone(task) {
  if (task.completed === true) {
    return true;
  } else {
    return false
  }
}
console.log(isTaskDone(tasks[0]));

//1.4 ex 6
function printAllTasksTitles(taskArray) {
  taskArray.forEach(task => {
    console.log(task.title);
  });
}
printAllTasksTitles(tasks);


//1.4 ex 7
function addTask(title) {
  const task = {
    title: title,
    completed: false
  };

  tasks.push(task);
  return task; 
} //Ne console : addTask("Study javasript")dhe me doli false 

//1.4 ex 8


function deleteTask(index) {
  if (index < 0 || index >= tasks.length) {
    console.warn("Invalid index:", index);
    return;
  }

  tasks.splice(index, 1);
}
deleteTask(1);
console.log(tasks);
// The task "Work out" is 
// removed from the array and the index is now valid.
*/

//Homework – JavaScript Practice & Task Functions

//a
let name = "Luis";
let age = 3;
let doLikeJavascript = true;

//b 
let favoriteFoods  = ["Bakllava", "pizza", "Ice Cream"];

console.log(favoriteFoods[0], favoriteFoods[2]);

let student  = [];

student.push({
  name: "Luis",
  age: 21, 
  isActive: true
});

console.log(student);

//c 
function square(number) {
  return number * number;
}
console.log(square(5)); // 25
console.log(square(10)); // 100


function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Nikolin")); // "Hello, Nikolin!"

//d
function printNumberaUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }}
  console.log(printNumberaUpTo(5)); // 1, 2, 3, 4, 5

function printEvenNumbersUpTo(n) {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }}
    console.log(printEvenNumbersUpTo(10)); // 2, 4, 6, 8, 10
//
const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenOrOdd = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};

numbers.forEach(num => {
  console.log(num, evenOrOdd(num));
});


//Homework Part 2 – Task Functions

let tasks = [];

function addTask(title) {
  const task = {
    title: title,
    completed: false
  };

  tasks.push(task);
}

// Add at least five tasks
addTask("Sleep");
addTask("Study");
addTask("Workout");
addTask("Eat");
addTask("Code");

console.log(tasks);

function deleteTask(index) {
  if (index < 0 || index >= tasks.length) {
    console.warn("Invalid index:", index);
    return;
  }}
deleteTask(0); 
console.log(tasks);


//Advanced 
//Exercise 1

console.log(`My next task is ${tasks[0].title}, Completed: ${tasks[0].completed}`);

//Exercise 2


