require('dotenv').config();

const express = require("express")
const app = express()

// cors
const cors = require("cors")

// middleware
app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(cors())


//database connection 
const connectToDb = require('./config/db.js')
connectToDb()

const userroutes = require("./routes/userRoutes.js")


// routing
app.use("/",userroutes)
module.exports = app;