const mongoose = require("mongoose")

const dbconnection = async () =>{
    mongoose.connect(process.env.DATABASE)
    .then((conn) => {
        console.log(`database connect to ${conn.connection.host}`)
    })
    .catch((e) =>{
        console.log(e.message)
        process.exit(1)
    })
}

module.exports = dbconnection