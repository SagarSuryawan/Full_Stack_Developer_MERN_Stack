const express = require("express")

const {home} = require("../controllers/userControllers.js")


const router = express.Router()
router.get("/", home)
module.exports = router;