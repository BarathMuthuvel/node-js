const fs = require('fs'); 
// const a = 100;

// setImmediate(() => console.log("setImmediate"));

// fs.readFile("./file.txt", "utf8", () => {
//   console.log("File Reading CB");
// });

// setTimeout(() => console.log("Timer expired"), 0);

// function printA() {
//   console.log("a=", a);
// }

// printA();

// console.log("Last line of the file.");

// const a = 100;

// setImmediate(() => console.log("setImmediate"));

// Promise.resolve(() => console.log("Promise")).then(fn => fn());

// fs.readFile("./file.txt", "utf8", () => {
//   console.log("File Reading CB");
// });

// setTimeout(() => console.log("Timer expired"), 0);

// process.nextTick(() => console.log("Porcess.nextTick"));

// function printA() {
//   console.log("a=", a);
// }

// printA();

// console.log("Last line of the file.");


setImmediate(() => console.log("setImmediate")); // 5

setTimeout(() => console.log("timer expired"), 0); // 4

Promise.resolve("promise").then(console.log); // 3

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd timer"), 0); // 9

  process.nextTick(() => console.log("2nd nextTick")); // 7

  setImmediate(() => console.log("2nd setImmediate")); // 8

  console.log("File reading CB"); // 6
});

process.nextTick(() => console.log("Process.nextTick")); //2

console.log("Last line of the file."); // 1
