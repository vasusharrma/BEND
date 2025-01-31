const http = require('node:http');

const app = http.createServer((req, res) => {

  if (req.url === '/getSecretData') {
    res.end("There is secret Data , but we want you to login first");
  }
  res.end("Hello Buddy!");
});


app.listen(5555);





