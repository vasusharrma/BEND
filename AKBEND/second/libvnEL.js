const a = 100;
const fs = require('fs');
setImmediate(() => console.log("setImmediate"));

fs.readFile("./gossip.txt", "utf8", (err, data) => {
  console.log("file  read successfully");
})

setTimeout(() => {
  console.log("Time Expired")
}, 0);


function namePrinting(name) {
  console.log("name");
}

namePrinting("vasu");

console.log("Last line of file");
