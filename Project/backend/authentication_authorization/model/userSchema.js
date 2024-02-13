const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:[true,'already registred']
    },
    password:{
        type:String
    },
    forgotpasswordtoken:{
        type:String
    },
    forgotpaaswordExpiryDate:{
        type:Date
    }

},{
    timestamps:true
})

// jwt token

userSchema.methods = {
    jwtToken(){
        return  JWT.sign(
        {
            id: this.id, 
            email: this.email
        },
            process.env.SERECT,
            {expiresIn:'24h'}
        )
    } 
}

module.exports = mongoose.model("User",userSchema)