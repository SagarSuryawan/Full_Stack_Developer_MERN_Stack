require("dotenv").config()
const express = require("express")
const app = express()

const dbconnection = require("./config/dbconfig.js")

dbconnection()

app.use("/",(req,res) =>{
    res.send("Welcome to Home Page")
})

module.exports = app