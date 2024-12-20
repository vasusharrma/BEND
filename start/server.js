const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000 , () => {
    console.log("App is live on PORT no 3000");
});

app.get('/',(req , res) =>{
    res.send("Hello buddy");
});

app.post('/api/village' , (req , res) =>  {
    const {name , dist} = req.body;
    console.log("Name is : " , name);
    console.log("District is : ", dist);
    res.send( "is village and {dist} is district"); 
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Cities' , {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connection Established Succesfully ");
})
.catch((error)=>{
    console.error("Error while connecting : " , error);
})

