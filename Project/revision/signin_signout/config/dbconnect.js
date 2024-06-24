const mongoose = require("mongoose")

const databaseconnection = async () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) =>{
        console.log(`server connected to database ${conn.connection.host}`)
    })
    .catch((error) =>{
        process.exit(1)
        console.log(error.message)
    })
}


module.exports = databaseconnection