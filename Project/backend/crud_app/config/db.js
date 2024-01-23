const mongosse = require("mongoose")

const connectToDb = async () =>{
    mongosse.connect(process.env.DATABASE_URL)
    .then((conn) =>{
        console.log(`connect to ${conn.connection.host}`)
    }).catch((error) =>{
        console.log(error.message)
        process.exit(1)
    })
}

module.exports = connectToDb
