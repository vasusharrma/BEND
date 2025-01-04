const express = require('express');
const {people , products} = require('./data');

const app = express();

app.get('/', (req , res) => {
    res.send("<h1>Homepage</h1>");
})

app.get('/about' , (req , res) => {
    res.send("<h1>Aboutpage</h1>");
})

app.get('/products/:productId' , (req ,res)  => {
    const {productId} = req.params;
    const singleData = products.find((product) =>  Number(productId) === product.id);
    res.json(singleData);
})

app.all('*' , (req , res) => {
    res.status(404).send("404 page not found");
})

app.listen(3000 , () => {
    console.log("App is listning on port 3000");
})