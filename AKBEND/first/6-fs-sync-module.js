const {readFileSync , writeFileSync} = require('fs');


const first = readFileSync('./father/first.txt' , 'utf8');
const second = readFileSync('./father/second.txt' , 'utf8');

console.log(first);
console.log(second);

writeFileSync('./father/file-sync.txt' , `The result are as follow : ${first} , ${second}` , {flag:'a'});