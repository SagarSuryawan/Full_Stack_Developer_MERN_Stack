const JWT = require("jsonwebtoken")


const jwtauth = async(req,res,next) => {
   
    
    const token = (req.cookies && req.cookies.token) || null
    // console.log(token)

    if(!token){
        return res.status(400).json({
            success:false,
            message:"Not Authorized"
        })
    }

    try {
        
        const payload = await JWT.verify(token,process.env.SECRET)
        // decode the token. If successful, it extracts the payload from the token
        // console.log(payload)

        req.user = {id: payload.id, email: payload.email }
        //  extracts the user information from the payload and attaches it to the req object under req.user
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