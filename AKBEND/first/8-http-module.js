const http = require('http');

const server = http.createServer((req , res) => {
    if(req.url == '/'){
        res.end("We are on homepage");
    }
    if(req.url == '/about'){
        res.end("We are on about page");
    }
    if(req.url == '/contact'){
        res.end('We are on contact page');
    }
    if(req.url == "/contact/user"){
        res.end("the user page : ");
    }
//req.url 
    res.end(`
       <h1>Oops!</h1>
       <p> you got on a wrong page <p>
       <a href='/'>Go to homepage</a> 
        `)
})


server.listen(5000);