
const express = require("express")

const {signup,signin,getuser,logout} = require("../controllers/usersControllers.js")
const jwtauth = require("../middleware/jwtauth.js")

const router = express.Router()


router.post("/signup",signup)
router.post("/signin",signin)
router.get("/getuser",jwtauth,getuser)
router.post("/logout",jwtauth,logout)

module.exports = router