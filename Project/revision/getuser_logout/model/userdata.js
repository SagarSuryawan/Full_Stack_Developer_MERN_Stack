const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const userinfo = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        select:false
    },
    confirmpassword:{
        type:String,
        select:false
    },
    forgotpasswordToken:{
        type:String
    },
    forgotpasswordexpirydate:{
        type:Date
    }
  
},
{
    timestamps:true
})

userinfo.methods = {

    jwtToken(){

        return jwt.sign(
            {id:this.id,email:this.email},
            process.env.SERECT,
            {expiresIn:'24hr'}
        )
    }
}


module.exports = mongoose.model("clientinfo",userinfo)