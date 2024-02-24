const app = require("./app.js")

const port = process.env.PORT || 8002

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})