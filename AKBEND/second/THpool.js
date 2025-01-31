process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require('crypto');


crypto.pbkdf2("password", "salt", 5000000, 58, "sha512", (err, key) => {
  console.log("1 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 58, "sha512", (err, key) => {
  console.log("2 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 58, "sha512", (err, key) => {
  console.log("3 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 58, "sha512", (err, key) => {
  console.log("4 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 58, "sha512", (err, key) => {
  console.log("5 - cryptoPBKDF2 done");
})

