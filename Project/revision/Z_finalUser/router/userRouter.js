const express = require("express")
const auth = require("../middleware/jwtauth")
const {signup,signin,getuser,logout} = require("../controllers/usercontroller")


const router = express.Router()

router.post("/signup",signup)
router.post("/signin",signin)
router.get("/getuser",auth,getuser)
router.get("/logout",auth,logout)

module.exports = router