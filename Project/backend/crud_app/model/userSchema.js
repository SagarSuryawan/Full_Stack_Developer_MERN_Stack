const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"name is requred"]
    },
    address:{
        type:String,
        trim:true,
        required:[true,"address is required"]
    },
    phone:{
        type:Number,
        required:[true,"phine no. is required"],
        unique:true
    }
})

module.exports = mongoose.model("User",userSchema)