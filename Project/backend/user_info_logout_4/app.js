const express = require("express")
const cors = require("cors")
const dbconnection = require("./config/dbconnection")
require("dotenv").config()
const app = express()

app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())
 const cookieParser = require("cookie-parser")

 dbconnection()


const userRoutes = require("./routes/usersRoutes.js")

app.use("/",userRoutes)




module.exports = app