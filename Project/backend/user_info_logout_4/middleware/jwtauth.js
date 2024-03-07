const JWT = require("jsonwebtoken")


const jwtauth = (req,res,next) => {
   
    
    const token = (req.cookies && req.cookies.token) || null
    // console.log(token)

    if(!token){
        return res.status(400).json({
            success:false,
            message:"Not Authorized"
        })
    }

    try {
        
        const payload = JWT.verify(token,process.env.SECRET)
        
        req.user = {id: payload.id, email: payload.email }
        console.log("req.user",req.user)
    } catch (e) {
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
    next()
}

module.exports = jwtauth;