const mongoose = require("mongoose")

const dataBaseConnection = async ()=> {

    mongoose.connect(process.env.DBURL)
    
    .then((conn) => {
        console.log(`database connected to ${conn.connection.host}`)
    })

    .catch((error) =>{
        console.log(error.message)
        process.exit(1)
    })

}

module.exports = dataBaseConnection