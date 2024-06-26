const jwt = require("jsonwebtoken")

const authenticate = (req,res,next) =>{
    const token = (req.cookies && req.cookies.token)  || null

    if(!token){
        return res.status(400).json({
            success:false,
            message:"Not Authorized"
        })
    }

    try {
        const payload = jwt.verify(token,process.env.SERECT)

        req.user = {
            id:payload.id,
            email:payload.email
        }

    } catch (error) {
        res.status(400).json({
            success:true,
            message:"Not Authorizes"
        })
    }
    
    next()
}

module.exports = authenticate