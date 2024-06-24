const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")

const userinfo = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'name is required'],
        trim:true,
    },

    email:{
        type:String,
        required:[true,'email is required'],
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        trim:true,
        required:[true,'password is required'],
        select:false
    },
    confirmpassword:{
        type:String,
        trim:true,
        required:[true,'password is required'],
    },
    forgotpasswordtoken:{
        type:String
    },
    forgotpasswordExpiryDate:{
        type:Date
    }
},
{
timestamp:true
})

userinfo.methods = {

    jwttoken(){

        return JWT.sign(
            {id:this.id,emsil:this.email},

            process.env.SAGAR,
            
            {expiresIn:"24hr"}
        )
    }
}







module.exports = mongoose.model("userdata",userinfo)