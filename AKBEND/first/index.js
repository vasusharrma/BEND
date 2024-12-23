// import {z , product} from './product.js'

const {private , vasu , ashu , nikhil} = require('./abc');

const sayHi = require('./sayHI')
const {items , schoolName} = require('./sweets.js');
console.log("data is: " ,schoolName.name);

sayHi(private)
sayHi(vasu)
sayHi(ashu)
sayHi(nikhil)