const mongoose = require("mongoose")

const dbconnection = async () => {
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) => {
        console.log(`database connected ${conn.connection.host}`)
    })
    .catch((error) => {
        console.log(error.message)
        process.exit(1)
    })
}

module.exports = dbconnection