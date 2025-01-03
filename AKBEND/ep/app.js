const http = require("http");
const {readFileSync} = require('fs');
//getting each and every file

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>Home page</h1>");
    res.end();
  }

  if (url == "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    
    res.write("<h1>About page</h1>");
    res.end();
  }
  if (url == "/contact") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>Contact page</h1>");
    res.end();
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write('<h1>page not found</h1>');
    res.end();
  }
});

server.listen(4000);
