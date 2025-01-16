console.log("first");

var a = 3243533;
var b = 9023843;

function multiply(x, y) {
  const ans = x * y;
  console.log("Functino called");
  return ans;
}

const c = multiply(a, b);
console.log("C is : ", c);
console.log("Global Execution Context Terminated");
