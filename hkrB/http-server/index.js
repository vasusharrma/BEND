const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('dotenv').config();
const port = 3005;

app.get('/', (req, res) => {
  res.send("Home");
})

app.post('/conversation', (req, res) => {
  const { message } = req.body;
  console.log("msg is : ", message);
  res.send("Post req. succesfully posted");
})

app.post('/converstation/:userId', (req, res) => {
  const { userId } = req.params;
  res.status(200).send(`user is : ${userId}`);
})


app.all("*", (req, res) => {

  res.status(404).send("Opps! page not found");
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});


