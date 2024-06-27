const mongoose = require("mongoose")

const connection = async () =>{
    mongoose.connect(process.env.URL)
    .then((conn) =>{
        console.log(`server connected to database ${conn.connection.host}`)
    })
    .catch((error) =>{
        process.exit(1)
        console.log(error.message)
    })
}

module.exports = connection