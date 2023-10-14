const httpModule = require("http")

const newServer  = httpModule.createServer((req,res) =>{
    if(req.url == '/'){
        res.write("Hi i am software developer")
    }
    res.end();
})

newServer.listen(5001);
console.log("running on 5001 port")