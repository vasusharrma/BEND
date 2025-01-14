const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log("boyd is ", req.body);
  res.send("Home");
})

app.get('/api/users', (req, res) => {
  res.json([{ name: "Vasu", age: 33 }, { name: "Ashu", age: 32 }, { name: "Nikhil", age: 31 }]);
});

app.listen(port, () => {
  console.log("serfer skiKJ");
})
