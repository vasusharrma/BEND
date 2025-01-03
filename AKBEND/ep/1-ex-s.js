const express = require('express');

const app = express();

// app.get
// app.post 
// app.put
// app.delete
// app.all 
// app.use
// app.listen

app.listen(3000 , () => {
  console.log("Server is listining on port 3000");
})



app.get('/',(req, res) => {
  console.log("user hit the page");
  res.status(200).send('Home Page');
})


app.get('/about' ,(req  ,res) => {
  console.log('user hit about page');
  res.status(200).send("About page");
})


app.all('*' ,(req , res)=>{
  console.log("user hit the wrong page");
  res.status(404).send("<h1>404 page not found</h1>");
})