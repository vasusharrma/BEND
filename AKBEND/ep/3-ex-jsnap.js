const express = require('express');
const {products , people} = require('./data.js');
const app = express();


app.get('/' , (req , res) => {
  res.send('<h1>Hello withone </h1><a href = "api/products">get products</a>');
})

app.get('/api/products', (req , res) => {
  const newProducts = products.map((product) =>{
    const {id , name , image} = product;
    return {id , name , image};
  })
  res.json(newProducts);
})

app.get('/api/products/:productId' , (req , res) => {
  const {productId} = req.params;

  const newProducts = products.filter((product) => Number(productId) === product.id);
  if(newProducts.length === 0){
    return res.status(404).send("404 Product not found");
  }
  return res.json(newProducts);
})


app.get('/api/products/:productId/reviews/:reviewId' , (req , res) =>  {

  console.log(req.params);
  res.send("Hello Buddy");
})

app.all('*' , (req , res)=>{
  res.status(404).send("404 page not found");
})


app.listen(3000 , () => {
  console.log("server is live on 3000....");
})