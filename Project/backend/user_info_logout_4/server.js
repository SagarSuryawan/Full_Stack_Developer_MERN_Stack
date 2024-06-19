const app = require("./app.js")

const port = process.env.PORT || 8009

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})