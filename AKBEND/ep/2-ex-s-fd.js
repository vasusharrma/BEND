const express = require('express');
const path = require('path');

const app = express();


//setup static and middleware
app.use(express.static('./public'))


// app.get('/' ,(req , res) => {
//   res.sendFile(path.resolve(__dirname , './navbar-app/index.html'));
// })

app.all('*' , (req , res) => {
  res.status(404).send("4040 page not found");
})

app.listen(3000 , () => {
  console.log("Server is listning on port 3000");
})
