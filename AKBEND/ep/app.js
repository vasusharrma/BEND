const http = require('http');

const server = http.createServer((req , res) => {
    console.log("Hello from server");
});


server.listen(4000);
