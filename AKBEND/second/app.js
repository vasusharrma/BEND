var a = 3203499;
var b = 320244;
const fs = require('fs');

// http.get("https://api.fbi.com", (res) => {
//   console.log(res?.secret);
// })
//

setTimeout(() => {
  console.log("setTimeout used");
}, 4000);

fs.readFile("./gossip.txt", "utf-8", (data) => {
  console.log("File data is : ", data);
})


function multiplyAB(x, y) {
  const result = x * y;
  return result;
}


var c = multiplyAB(a, b);

console.log(c);
