const jwt = require("jsonwebtoken")

const jwtauth = (req,res,next) =>{
    const token  = (req.cookies && req.cookies.token)  || null

    if(!token){
        return res.status(400).json({
            success:true,
            message:"Not authorize"
        })
    }

    try {
        const payload = jwt.verify(token,process.env.SERECT)

        req.user = {
            id:payload.id,
            email:payload.email
        }

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
            
        })
    }

    next()
} 

module.exports = jwtauth

