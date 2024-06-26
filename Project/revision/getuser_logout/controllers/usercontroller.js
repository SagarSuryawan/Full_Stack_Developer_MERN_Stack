const USER = require("../model/userdata")
const emailValidator = require("email-validator")
const bcrypt = require("bcryptjs")

exports.signup = async (req,res) => {

const {name,email,password,confirmpassword} = req.body

if(!name || !email || !password || !confirmpassword){
    return res.status(400).json({
        success:true,
        message:"all feild are required"
    })
}
const validateEmail = emailValidator.validate(email)

if(!validateEmail){
    return res.status(400).json({
        success:false,
        message:"please enter valid email"
    })
}

if(password !== confirmpassword){
    return res.status(400).json({
        success:false,
        message:"password does not match"
    })
}

try {
    const {name,email,password,confirmpassword} = req.body

    const userexists = await USER.findOne({email})

    if(userexists){
        return res.status(400).json({
            success:false,
            message:"user already exixts with email"
        })
    }

    const user = await USER.create({
        name,email,password,confirmpassword
    })
    res.status(200).json({
        success:true,
        message:"user created successfully",
        data:user
    })
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message,
       
    })
}

}

exports.signin = async(req,res) => {

const {email,password} = req.body
if(!email || !password){
    return res.status(400).json({
        success:false,
        message:"all feild are required"
    })
}
try {
    const user = await USER.findOne({email}).select('+password')

   

    if(!user || !(await bcrypt.compare(password,user.password))){
        return res.status(400).json({
            success:false,
            message:"invalid email or password"
        })
    }
    
    const token = user.jwtToken()
    user.password = undefined

    const cookieOption = {
        maxAge:24 * 60 * 60 * 1000,
        httpOnly:true
    }
    res.cookie("token",token,cookieOption)

        return res.status(200).json({
        success:true,
        data:user,
        message:"user signin successfully again "
       })

} catch (error) {
     res.status(400).json({
        success:false,
        message:error.message,
        data:"error"
    })
}
}

exports.getuser = async (req,res,next) => {
    const userid = req.user.id

    try {
        const user = await USER.findById(userid)
        return res.status(200).json({
            success:true,
            user,
            message:"User Info"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


exports.logout = async(req,res,next) =>{

    try {
        const cookieOption = {
            expires: new Date(),
            httpOnly:true
        }
        res.cookie("token",null,cookieOption)
        res.status(200).json({
            success:true,
            message:"logout"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }

    
}