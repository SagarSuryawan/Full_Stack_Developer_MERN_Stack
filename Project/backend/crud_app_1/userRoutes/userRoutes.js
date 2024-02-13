const express = require("express")

const {createUser,editUser,deleteUser,getAllUser} = require("../controllers/controllers.js")

const router = express.Router()

router.post("/createuser",createUser)  
// createuser

router.put("/edituser/:id",editUser)
// edituser
router.delete("/deleteuser/:id",deleteUser)
// deletuser
router.get("/getalluser",getAllUser)




module.exports = router