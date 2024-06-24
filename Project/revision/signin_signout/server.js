const app = require("./app")

const port = process.env.PORT  ||  7700

app.listen(port,()=>{
    console.log(`server running on ${port} port`)
})