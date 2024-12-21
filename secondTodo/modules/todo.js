const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({

    title:{
        type:String,
        required:true,
        maxLength:50
    },
    description:{
        type:String,
        require:true,
        maxLenght:100
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }

});

module.exports = mongoose.model("Todo" , todoSchema);