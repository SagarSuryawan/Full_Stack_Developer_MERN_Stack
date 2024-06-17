const express = require("express")

const {createuser,edituser,deleteuser,getuser} = require("../controllers/controller.js")
const router = express.Router()

router.post('/createuser',createuser)
router.put('/edituser/:id',edituser)
router.delete('/deleteuser/:id',deleteuser)
router.get('/getuser',getuser)

module.exports = router