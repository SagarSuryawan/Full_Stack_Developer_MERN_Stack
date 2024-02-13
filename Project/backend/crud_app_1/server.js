const app = require("./app.js")

const port = process.env.PORT || 7700

app.listen(port,()=>{
    console.log(`server connect to ${port}`)
})