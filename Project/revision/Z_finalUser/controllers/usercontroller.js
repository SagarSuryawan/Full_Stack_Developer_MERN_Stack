const USER = require("../model/userdata")
const email_validator = require("email-validator") 

exports.signup = async (req,res) =>{

    const {name,email,password} = req.body
    if(!name || !email ||!password){
        return res.status(400).json({
            success:false,
            message:"All feild are required"
        })
    }

    const validate = email_validator.validate(email)

    if(!validate){
        return res.status({
            success:false,
            message:"invalid email address"
        })
    }

    try {
        
        const {name,email,password} = req.body

        // const userExists = await USER.findOne({email})

        // if(userExists){
        //     return res.status(400).json({
        //         success:false,
        //         message:"user already present"
        //     })
        // }

        const user = await USER.create({
            name,
            email,
            password
        })

        res.status(200).json({
            success:true,
            message:"user creadted successfully",
            user
        })
        
        

    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({
                success:false,
                message:"user already exists"
            })
        }

        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.signin = async (req,res) =>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"all feild are required"
        })
    }

    try {
        const user = await USER.findOne({email}).select('+password')
        console.log(user)

        if(!user || user.password !== password){

            return res.status(400).json({
                success:false,
                message:"invalid credential"
            })
        }

        const token = user.jwtToken()
        user.password = undefined

        const cookieOption = {
            httpOnly:true,
            maxAge:24 * 60 * 60 * 1000
        }
        res.cookie("token",token,cookieOption)

        return res.status(200).json({
            success:true,
            message:"user successfully login",
            data:user
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.getuser = async (req,res,next) =>{
    const userid = req.user.id
    try {
        const user = await USER.findById(userid)
        return res.status(200).json({
            suuccess:true,
            data:user,
            message:"successfully get"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.logout = async (req,res) =>{
    try {
        const cookieOption = {
            expires:new Date(),
            httpOnly:true
        }
        res.cookie("token",null,cookieOption)
        return res.status(400).json({
            success:true,
            message:"user logout"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"user still login"
        })
    }
}