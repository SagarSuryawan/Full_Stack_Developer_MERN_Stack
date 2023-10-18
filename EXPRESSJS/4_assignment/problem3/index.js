const express = require("express")
const app = express()
const port = 7009;

app.get('/',(req,res)=>{
    res.send(`I am homepage`)
})
app.get('/about',(req,res) =>{
    res.send(`I am about page`)
})
app.get('/contact',(req,res) =>{
    res.send(`email:support@pwskills.com`)
})


app.listen(port, () =>{
    console.log(`server running on ${port}`)
})