const http = require('http');
const { readFile } = require('fs');

var a = 30988493;
var b = 9302824;


http.get('http://dummyjson.com/carts', (req, res) => {
  console.log("Data is fetched");
})

setTimeout(() => {
  console.log("set Timeout called");
}, 5000);

readFile('./gossip.txt', 'utf-8', (err, data) => {
  console.log("gossip data : ", data);
})


function multiply(x, y) {
  const result = x * y;
  console.log("function called");
  return result;
}

console.log("after function");
var c = multiply(a, b);
console.log('C is : ', c);
console.log("Global Execution Context 'GEC' terminated ");

