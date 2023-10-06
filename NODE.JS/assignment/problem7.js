const http = require("http")


 const server = http.createServer((req,res) =>{
    {
    res.write("I Am Happy To Learn Full Stack Web Development From PW Skills!")
    }
    res.end();

})


server.listen(2000);
console.log("runnig on port 20000")
