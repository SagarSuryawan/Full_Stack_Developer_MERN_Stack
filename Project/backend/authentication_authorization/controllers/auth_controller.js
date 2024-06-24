const Users = require("../model/userSchema.js")
const emailValidator = require("email-validator")

// every controllers have same steps like first validate and then try catch block

exports.signup = async (req,res) => {
    
        const { name,email,password,confirmpassword } = req.body
    // this is JSON data

    if(!name || !email || !password || !confirmpassword){
        return res.status(400).json({
            success:false,
            message:"Every Feild is Required"
        })
    }

    const email_Validator = emailValidator.validate(email)
     
    if(!email_Validator){
        return res.status(400).json({
            success:false,
            message:"please provide valid email address"
        })
    }

    if(password !== confirmpassword){
        return res.status(400).json({
            success:false,
            message:"password does not match"
        })
    }


    // if structure is not same mesans key and value name are not same then below step is required else you can add req.body.
    try { 
    const { name,email,password,confirmpassword } = req.body
    const user = await Users.create({
        name,
        email,
        password,
        confirmpassword
    })
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({
                success:false,
                message:'Account is already exists sagar'
            })
        }
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
    
}

exports.signin = async(req,res) =>{
    const {email,password} = req.body
    console.log(email)
    console.log(password)
    // this email and password which is given in form by user

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Every feild is required"
        })
    }

    // identify email is exists in database or not 
    try{
        const user = await Users.findOne({
            email
        })
        // if email is exists then give me the password of that email.
        .select('+password')

        console.log(user)
        
        
    
        // validation,if user exists or user.password(given password) iscequal to req.body password
        if(!user || user.password !== password) {
    
            return res.status(400).json({
                success:false,
                message:"invalid email or password"
    
            })
        }
    
        const token  = user.jwtToken()

        user.password = undefined;
    
        const cookieOption  = {
            maxAge:24 * 60 * 60 * 1000,
            httpOnly:true
        }

    
        res.cookie("token",token,cookieOption);

        return res.status(200).json({
            success:true,
            data:user,
            message:"user successfully login"
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
    
}


// Note:1) in controllers first exract values from req.body.2) validate values if values are correct or not with operators,dependencies or find user already exists or not. After that try catch error to find .  
