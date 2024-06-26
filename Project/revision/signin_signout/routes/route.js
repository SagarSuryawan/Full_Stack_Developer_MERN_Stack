const express = require("express")
const router = express.Router()
const jwtAuth = require("../middleware/auth.js")
const {signup,signin,getuser} = require("../controller/usercontroller.js")



router.post("/signup",signup)
router.post("/signin",signin)
router.get("/getuser",jwtAuth,getuser)


module.exports = router