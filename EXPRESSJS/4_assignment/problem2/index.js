const express = require("express")
const app = express()
const port = 7005;
let counter = 0
app.get('/',(req,res)=>{
    res.send(`counter:${counter}`)
})
app.get('/increment',(req,res) =>{
    counter++;
    res.send(`increment:${counter}`)
})
app.get('/decrement',(req,res) =>{
    counter--;
    res.send(`decrement:${counter}`)
})

app.listen(port,() =>{
    console.log(`server running on port ${port}`)
})