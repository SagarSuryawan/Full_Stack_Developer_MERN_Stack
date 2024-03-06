const JWT = require("jsonwebtoken")


const jwtauth = (req,res,next) => {
    
    const token = (req.cookies && req.cookies.token)  || null

    if(!token){
        return res.status(400).json({
            success:false,
            message:"Not Authorized"
        })
    }

    try {
        
        const payload = JWT.verify("token",proccess.env.SERECT)
        req.user = {
            id:payload.id,
            email:payload.id
        }
    } catch (e) {
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
    next()
}

module.exports = jwtauth