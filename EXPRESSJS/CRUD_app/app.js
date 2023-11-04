require('dotenv').config();

const express = require("express")
const app = express()

const connectToDb = require('./config/db.js')
connectToDb()

app.get("/",(req,res) =>{
    res.send("Hello World")
})
module.exports = app;