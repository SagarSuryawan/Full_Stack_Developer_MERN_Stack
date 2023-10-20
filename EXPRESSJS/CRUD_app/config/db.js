const mongoose  = require("mongoose")

const connec_to_db = async () =>{

    mongoose.connect(process.env.MONGO_URL)
    .then((con) =>{
        console.log(`connected to db ${conn.connection.host}`)
    })
    .catch((err) =>{
        console.log(err.message)
        process.exit(1)
    })
}

module.exports = connec_to_db