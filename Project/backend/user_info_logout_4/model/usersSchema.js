
const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")
// const bcrypt = require("bcrypt")

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

// userSchema.pre("save", async function(){

//     if(!this.isModified("password")) {
//         return next();

//     }
// })


userSchema.methods = {
    jwtToken(){
        return JWT.sign(
            {
                id:this.id,
                email:this.email
            },
            process.env.SECRET,
            {expiresIn:"24h"}
        )
    }
} 

module.exports = mongoose.model("User",userSchema)