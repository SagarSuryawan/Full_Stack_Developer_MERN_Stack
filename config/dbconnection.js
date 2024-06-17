
const mongoose = require("mongoose")

const dbconnection = async ()=> {

    mongoose.connect(process.env.DATABASE_URL)
    .then((conn)=>{
        console.log(`database connected ${conn.connection.host}`)
    })
    .catch((err) =>{
        console.log(err.message)
        process.exit(1)
    })
}


module.exports = dbconnection;
