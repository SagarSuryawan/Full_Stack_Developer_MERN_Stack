
const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        trim:true
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        unique:[true,"already registered"]
    },
    password:{
        type:String,
        select:false
    },
    forgotpasswordtoken:{
        type:String
    },
    forgotpasswordexpirydate:{
        type:Date
    }
},
    {
        timestamp:true
    }
)

userSchema.methods = {
    jwtToken(){
        return JWT.sign(
            {
                id:this.id,
                email:this.email
            },
            process.env.SERECT,
            {expiresIn:"24h"}
        )
    }
} 

module.exports = mongoose.model("User",userSchema)