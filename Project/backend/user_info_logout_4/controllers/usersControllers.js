const emailValidator = require("email-validator")

const user = require("../model/usersSchema.js")

exports.signup = async(req,res) =>{

    const {name ,email ,password ,confirmpassword} = req.body

    if(!name || !email || !password || !confirmpassword) {
        return res.status(400).json({
            success:false,
            message:"All Feilds are required"
        })
    }

    const validateEmail = emailValidator.validate(email)

    if(!validateEmail){
        return res.status(400).json({
            success:false,
            message:"enter Valid email"
        })
    }

    if(password !== confirmpassword){
        return res.status(400).json({
            success:false,
            message:"password does not match"
        })
    }

    try {

        const {name ,email ,password ,confirmpassword} = req.body

        const User = await user.create({
            name ,
            email ,
            password ,
            confirmpassword
        })
        return res.status(200).json({
            success:true,
            data:User
        })
    } catch (e) {
        if(e.code == 11000){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }

}


exports.signin = async(req,res) =>{

    const {email,password} = req.body

    if(!email || !password) {
        return res.status(400).json({
            success:false,
            message:"All Feild is required"
        })
    }

    try {
        const User = await user.findOne({email}).select("+password")

        if( !user || password !== User.password){
            return res.status(400).json({
                success:false,
                message:"Invalid user or password"
            })
        }

        const token = User.jwtToken()
        user.password = undefined

        const cookieOption = {
            maxAge:24 * 60 * 60 * 1000,
            httpOnly:true
        }

        res.cookie(token, "token", cookieOption)

        res.status(200).json({
            success:true,
            data:User,
            message:"successfully login"
        })

    } catch (e) {
        return res.status(400).json({
            success:false,
            message:e.message
        })
        
    }
}

exports.getuser = async(req,res,next) =>{

    const userId = req.user.id

    try {
        const User = await user.findById(userId)
        return res.status(200).json({
            success:true,
            data:User,
            message:"get user successfully"
        })
    } catch (e) {
        return res.status(400).json({
            sucess:false,
            message:e.message,
            
        })
    }
}

exports.logout = (req,res) =>{
    try {
        const cookieOption = {
            expires:new Date(),
            httpOnly:true
        }
        res.cookie("token",null,cookieOption)

        return res.status(200).json({
            success:true,
            message:"successfully logged out" 
        })
    } catch (e) {
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}
