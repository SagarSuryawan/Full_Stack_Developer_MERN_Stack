const userdata = require("../model/userschema.js")
const emailValidator = require("email-validator")

exports.signup = async (req,res) => {

    const { name,email,password,confirmpassword } = req.body

    if(!name || !email || !password || !confirmpassword) {
        return res.status(400).json({
            success:false,
            message:"all feild is required"
        })
    }

    const emailvalidate = emailValidator.validate(email)

    if(!emailvalidate){
        return res.status(400).json({
            success:false,
            message:"enter valid email address"
        })
    }

    if(password !== confirmpassword){
        return res.status(400).json({
            success:false,
            message:"password does not match"
        })
    }
    
    try{
        const {name,email,password,confirmpassword} = req.body
        const userExists = await userdata.findOne({ email })
        if (userExists) {
        return res.status(400).json({
        success: false,
        message: "User already exists"
    })
}

        const user = await userdata.create({
            name,
            email,
            password,
            confirmpassword
        })

        res.status(200).json({
            success:true,
            message:"user created successfully",
            user
        })

    }catch(error){
        if(error.code === 11000){
            return res.status(400).json({
                success:false,
                message:"account is already registered"
            })
        }
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

// exports.signin = async(req,res) =>{
//     const {email,password} = req.body

//     if(!email || !password){
//         return res.status(400).json({
//             success:false,
//             message:"All feild is required"
//         })
//     }
    
//     try{

//         const user = await userdata.findOne({email}).select('+password')

//         if(!user || user.password !== password){
//             return res.status(400).json({
//                 success:false,
//                 message:"invalid email address or password"
//             })
//         }

//         const token  = user.jwttoken()
//         user.password = undefined;

//         const cookieOption = {
//             maxAge:24 * 60 * 60 * 1000,
//             httpOnly:true
//         }

//         res.cookie("token",token,cookieOption)
//         return res.status(200).json({
//                 success:true,
//                 data:user,
//                 message:"user successfully login"
//             })
        

//     }catch(error){
//         res.status(400).json({
//             success:false,
//             message:error.message
//         })
//     }
// }

exports.signin = async(req,res) =>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(4000).json({
            success:false,
            message:"all feild are required"
        })
    }

    try{

       const user = await userdata.findOne({email}).select('+password')

       if(!user || user.password !== password){
        return res.status(400).json({
            success:false,
            message:"invalid email or password"
        })
       }

       const token = user.jwttoken()
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

    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.getuser = async(req,res) =>{
    const userid = req.user.id
    try {
        const user = await USER.findById(userid)
        return res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}