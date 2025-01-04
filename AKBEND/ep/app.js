const express = require("express");
const app = express();
const logger = require("./logger");

// req => middleware => res
app.use(logger);

app.get("/",(req, res) => {
  res.send("Home");
});

app.get("/about",(req, res) => {
  res.send("About");
});

app.get("/api/products",(req, res) => {
  res.send("Products");
});

app.get("/api/items",(req, res) => {
  res.send("Items");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>OOPS! page not found");
});

app.listen(3000, () => {
  console.log("server is live on 3000....");
});
