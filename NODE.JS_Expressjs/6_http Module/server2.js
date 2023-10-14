const http = require("http")

 const server2 = http.createServer((req,res)=>{
    if(req.url = '/about')
    {
        res.write("<h1>hi,THIS IS ABOUT PAGE</h1>")
    }
    else if (req.url = "/home")
    {
        res.write("hi,this is home page")
    }
    res.end();
})

server2.listen(4000);
console.log("runnig on 4000 port")


