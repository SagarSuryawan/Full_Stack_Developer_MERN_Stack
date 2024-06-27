require("dotenv").config()
const cookieParser = require("cookie-parser")

const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())
app.use(cookieParser())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const databaseconnection = require("./config/connectdb")
databaseconnection()

const routing = require("./router/userRouter")

app.use("/",routing)

module.exports = app