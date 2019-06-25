// Data Types
var x = 5;
x = "hi";
x = {
  name: "Natan",
  age: 0,
  location: "TM"
};

// Coercion
console.log(true && 0);
console.log("1" + 2);
console.log("1" + 2 + false);

// !!"hello"
// +"1"+23

// Sync/Async
setTimeout(() => { console.log('Hello'); });
console.log('hi');
