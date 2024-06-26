const express = require("express")

const {signin,signup, getuser,logout} = require("../controllers/usercontroller")
const auth = require("../middelware/check")
const router = express.Router()

router.post("/signup",signup)
router.post("/signin",signin)
router.get("/getuser",auth,getuser)
router.get("/logout",auth,logout)

module.exports = router