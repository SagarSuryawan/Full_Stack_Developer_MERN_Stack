
const express = require("express")
const router = express.Router()
const jwtAuth = require("../middleware/jwtAuth.js")

const {signup,signin, getUser} = require("../controller/userControllers.js")




router.post("/signup",signup)
router.post("/signin",signin)
router.get("/getuser",jwtAuth,getUser)


module.exports = router