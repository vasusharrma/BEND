const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect('process.env.DATABASE_URL' , {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log("Successfully Connected ")
    })
    .catch((e) => {
        console.e("Error while connecting " , e.message);
        process.exit(1);
    })
}


module.exports = dbConnect;