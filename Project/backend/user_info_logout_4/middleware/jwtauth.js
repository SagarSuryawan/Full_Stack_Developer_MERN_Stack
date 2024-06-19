//  function called jwtAuth that is designed to verify the authenticity of a JWT (JSON Web Token) provided by a client. It is typically used to protect routes that require a valid authentication token to access.
// middleware insure that user logged in or not and valid token or not 

const JWT = require("jsonwebtoken")

const jwtAuth = (req,res,next) => {

const token = (req.cookies && req.cookies.token) || null
//req.cookies object exists and contains a property named token. If it does, it assigns the value of req.cookies.token to the token variable. If req.cookies is undefined or does not contain a property named token, the token variable is assigned the value null.

if(!token){
    return res.status(400).json({
        success:false,
        message:"Not Authorized"
    })
}

    try {
        
        const payload = JWT.verify(token,process.env.SERECT);
        req.user = {
            id: payload.id,
            email: payload.email
        }
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
            
        })
    }

    next();

}

module.exports = jwtAuth;