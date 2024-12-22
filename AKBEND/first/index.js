var namek = "Vasu Sharma";
const shit = require('./abc');
const {x , getProduct} = require('./product');

var a = 20;
 
var b = 30;
console.log(namek , a, b);

getProduct(3 , 8);
console.log("x from product is : " , x);

console.log("is  shit running : ");
console.log(globalThis === global);