const a = 100;
const fs = require('fs');

setImmediate(() => console.log("setImmediate"));
Promise.resolve("Promise").then(console.log);
fs.readFile("./gossip.txt", "utf-8", (err, data) => {
  console.log("File REAding ");
})

setTimeout(() => {
  console.log("Timer expired");
}, 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last Line of code");

