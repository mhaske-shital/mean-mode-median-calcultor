const mongoose =require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require
    }

},{timestamps:true})

module.exports=mongoose.model("user",userSchema)