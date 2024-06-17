require("dotenv").config()
const cors = require("cors")

const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())






const database_connection = require("./config/dbconnection.js")
database_connection()



const userroutes = require("./routes/userroutes.js")

app.use("/",userroutes)

module.exports = app