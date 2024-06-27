const jwt = require("jsonwebtoken")

const jwtauth = async (req,res,next) =>{

    const token = (req.cookies && req.cookies.token) || null

    if(!token){
         res.status(400).json({
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
            success:false,
            message:"Not Authorized"
        })
    }

    next()
}

module.exports = jwtauth