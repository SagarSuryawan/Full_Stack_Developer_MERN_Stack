const express = require("express")
const cors = require("cors")
const dbconnection = require("./config/dbconnection")
require("dotenv").config()
const cookieParser = require("cookie-parser")
// network communication is strerlize ,to convert in json
const app = express()

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())
 app.use(cookieParser())

 dbconnection()


const userRoutes = require("./routes/usersRoutes.js")

app.use("/",userRoutes)




module.exports = app