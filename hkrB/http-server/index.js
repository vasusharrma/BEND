const express = require('express');
const app = express();
const bodyPareser = require('body-parser');
const port = 4000;
app.use(bodyPareser.json());

app.get('/', (req, res) => {
  res.send("Home");
})

app.get('/api/items/:itemId', (req, res) => {
  const { itemId } = req.params;
  res.send(`item id is : ${itemId}`);
})


app.post('/conversation', (req, res) => {
  console.log('req body : ', req.body);
  res.send("conversation");
})


app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
})

