require("dotenv").config()

const cors = require("cors")

const express = require("express")
const dataBaseConnection = require("./config/dbconnection")

const app = express()

app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())

dataBaseConnection()

const routers = require("./routes/userRoutes.js")

app.use("/",routers)

module.exports = app;
