const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const usersinfo = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        trim:true,
        required:[true,'password is required'],
        select:false
    }
})

usersinfo.methods = {
    jwtToken(){
       return jwt.sign(
            {id:this.id,email:this.id},
            process.env.SERECT,
            {expiresIn:'24hr'}
        )
    }
}


module.exports = mongoose.model("allUserInfo",usersinfo)