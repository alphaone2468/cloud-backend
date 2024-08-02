const mongoose=require("mongoose");
require("../db/connection.js")

const sch=new mongoose.Schema({
    title:{
        type: String,
        required:true,
        maxlength:50
    },
    description:{
        type: String,
        required:true,
        maxlength:200
    },
    image:{
        type: String,
        required:true
    },
    video:{
        type: String,
        required:true
    }
})

const model=mongoose.model("videos",sch)

module.exports=model