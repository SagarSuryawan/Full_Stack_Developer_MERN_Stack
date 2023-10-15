// const express = require("express");
// const app = express();
// const port = 4999;

// app.get('/',(req,res) => {
//     res.send('Hello world')
// })

// app.listen(port,() =>{
//     console.log(`server running at ${port}`)
// })


// =============================================================================



// const express = require("express");
// const app = express();
// const port = 4999;

// app.get('/',(req,res) => {
//     res.send('Hello world')
// })
// app.get('/about',(req,res) => {
//     res.send('about page')
// })
// app.get('/contact',(req,res) => {
//     res.send('contact page')
// })

// app.listen(port,() =>{
//     console.log(`server running at ${port}`)
// })



const express = require("express")
const app = express();
const port = 7001;


app.get('/',(req,res) =>{
    res.send("HOme Page")
})
app.get('/about',(req,res) => {
        res.send('about page')
    })
app.get('/contact',(req,res) => {
        res.send('contact page')
    })


    app.listen(port,() =>{
        console.log(`server running on ${port} port`)
    })