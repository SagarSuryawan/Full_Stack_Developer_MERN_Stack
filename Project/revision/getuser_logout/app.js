require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


const dbconnection = require("./config/db")
dbconnection();


const routing = require("./routes/userroutes")
app.use("/",routing)


module.exports = app