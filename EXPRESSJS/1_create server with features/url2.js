const http = require("http");

const port = 5000;


const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader = ("Content-Type",'text/plain')
        res.end('Home Page')
    }else if(req.url == '/about'){
        res.statusCode = 200;
        res.setHeader = ("Content-Type",'text/plain')
        res.end('about page')
    }else if(req.url == '/product'){
        
        const option = {
            hostname:"fakestoreapi.com",
            path:"/products/1",
            method:"GET"
        }

        const apiReq = http.request(option,(apiRes) =>{
            apiRes.on("data",(data) =>{
                res.statusCode = 200;
                res.setHeader("Content-Type",'application/json')
                res.end(data.toString())
            })
        })
        apiReq.on("error",()=>{
            console.log(e)
        })
        apiReq.end()

    }else {
        res.statusCode = 500;
        res.setHeader("Content-Type",'text/plain')
        res.end("error")
    }
})

server.listen(port,()=>{
    console.log(`server running on ${port} port`)
})