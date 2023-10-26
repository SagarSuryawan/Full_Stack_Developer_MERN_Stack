import express from "express"
const app = express()

app.get('/', (req,res) =>{
    res.send("Hello Wrold!")
})

app.get('/contact', (req,res) =>{
    res.send("you can reach out to us")
})

app.get('/about', (req,res) =>{
    res.send("about page")
})

export default app