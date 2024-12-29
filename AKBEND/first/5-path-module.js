const path = require('path');
//path module
console.log(path.sep);

const filePath = path.join('/father' , 'child', 'pathtest.js');

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname , 'father','child' , 'pathtest.js');

console.log(absolutePath);
