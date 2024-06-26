const mongoose = require("mongoose")

const dbconnect = async () => {
    mongoose.connect(process.env.MONGO)
    .then((conn) =>{
        console.log(`server connected to database${conn.connection.host}`)
    })
    .catch((error) =>{
        process.exit(1)
        console.log(error.message)
        
    })
}


module.exports = dbconnect