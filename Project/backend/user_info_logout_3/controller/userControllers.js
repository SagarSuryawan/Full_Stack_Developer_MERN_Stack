const User = require("../model/userSchema.js")
const emailValidator = require("email-validator")

// exports.signup = async (req,res) =>{

//     const { name,email,password,confirmpassword } = req.body

//     if(!name || !email || !password || !confirmpassword){

//         return res.status(400).json({
//             success:false,
//             message:"Every feild is required"
//         })
//     }

//     const validateEmail = emailValidator.validate(email) 

//     if(!validateEmail){
//         return res.status(400).json({
//             success:false,
//             message:"please enter valid email "
//         })
//     }

//     if(password !== confirmpassword){
//         return res.status(400).json({
//             success:false,
//             message:"password does not match"
//         })
//     }

//     try {

//         const { name,email,password,confirmpassword } = req.body
//         const user = await User.create({
//             name,
//             email,
//             password,
//             confirmpassword           
//         })
        
//         return res.status(200).json({
//             success:true,
//             data:user
//         })


//     } catch (error) {

//         if(error.code === 11000){
//             return res.status(400).json({
//                 success:false,
//                 message:'Account is already exists'
//             })
//         }

//         return res.status(400).json({
//             success:false,
//             message:error.message
//         })

//     }

//  }

exports.signin = async (req,res,next) =>{

        const { email,password } = req.body
    
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Every feild is required"
            })
        }

        try {
            const user = await User.findOne({email}).select("+password")

            if(!user || user.password !== password){
                return res.status(400).json({
                    success:false,
                    message:"invalid user or password"
                })
            }
// Create jwt token using userSchema method( jwtToken() )
            const token  = user.jwtToken()
             user.password = undefined

            const cookieOption = {
                maxAge:24 * 60 * 60 * 1000,
                httpOnly:true
            }
            res.cookie("token", token, cookieOption)
            
            res.status(200).json({
                success:true,
                data:user,
                message:"successful"
            })

} catch (error) {
            
            res.status(400).json({
                success:false,
                message:error.message
            })

        }
        
}


exports.signup = async (req,res) =>{

    const { name,email,password,confirmpassword } = req.body

    if(!name || !email|| !password|| !confirmpassword){
        return res.status(400).json({
            success:false,
            message:"Every feild is required"
        })
    }

    const validateEmail = emailValidator.validate(email)

    if(!validateEmail){
        return res.status(400).json({
            success:false,
            message:"Enter Valid email address"
        })
    }

    if(password !== confirmpassword){
        return res.status(400).json({
            success:false,
            message:"password does not match"
        })
    }
    
    try {
        
        const { name,email,password,confirmpassword } = req.body

        const user = await User.create({
            name,
            email,
            password,
            confirmpassword
        })

        return res.status(200).json({
            success:true,
            data:user
        })

    } catch (error) {
        if(error.code == 11000){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }

        return res.status(400).json({
            success:false,
            message:error.message
        })
        
    }
}


exports.getUser = async (req,res) =>{
    const userId = req.user.id
    try {

        const user = await User.findById(userId)
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