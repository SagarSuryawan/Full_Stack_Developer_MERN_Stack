
const express = require("express")
const router = express.Router()
const jwtAuth = require("../middleware/jwtAuth.js")

const {signup,signin, getUser,logout} = require("../controller/userControllers.js")




router.post("/signup",signup)
router.post("/signin",signin)
router.get("/getuser",jwtAuth,getUser)
router.get("/logout",jwtAuth,logout)


module.exports = router