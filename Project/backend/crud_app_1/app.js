 require("dotenv").config()
 const express = require("express")
 const cors = require("cors")

 const app = express()

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())



 const connectionToDatabase = require("./config/db.js")
 connectionToDatabase()

 const userRouter = require("./userRoutes/userRoutes.js")

 app.use("/",userRouter)

 module.exports = app;