require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())



const dbconnection = require("./config/dbconfig.js")
dbconnection()

const routing = require("./routes/userRoutes.js")

app.use("/",routing)

module.exports = app