 require("dotenv").config()
 const express = require("express")

 const app = express()

 const connectionToDatabase = require("./config/db.js")
 connectionToDatabase()


 app.get("/",(req,res) =>{
    res.send("Hello World")
 })

 module.exports = app;