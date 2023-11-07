const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,'Name is Required'],
            trim:true,
            maxLength:[20,'Name must be less than 20 char']
        },
        email: {
            type:String,
            required:[true,'email is required'],
            unique:true,
            trim:true
        }
    })

    module.exports = mongoose.model("User",userSchema)