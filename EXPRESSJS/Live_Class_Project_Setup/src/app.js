import express from 'express'
const app  = express()
export default app;

app.get('/',(req,res) =>{
    res.send('welcome to Home Page')
})
