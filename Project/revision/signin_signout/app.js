require("dotenv").config()
const cors = require("cors")

const connection = require("./config/dbconnect")
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


connection();

const routes = require("./routes/route")

app.use("/",routes)


module.exports = app

