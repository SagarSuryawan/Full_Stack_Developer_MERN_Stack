const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"],
    }
})

module.exports = mongoose.model("USER",userSchema)


