import app from './app.js'
const port = 4001;
import mongoose from 'mongoose';

// database connection
(async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017')
        console.log("connected")

        app.on("error",(err) =>{
            console.log("error: ",err)
            throw err;
        })
        app.listen(port,()=>{
            console.log("listend")
        })
    }catch(error){
        console.log("error:",error)
        throw error;
    }
})()


// app.listen(port,() =>{
//     console.log(`server running on ${port} port`)
// })