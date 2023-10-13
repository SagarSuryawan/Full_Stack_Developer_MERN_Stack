const { createServer } = require("http");

const http = require("http");

const port = 1005;

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain")
        res.end("Welcome to node.js home page,url")

    }else if (req.url == '/about'){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain")
        res.end("about page")

    }else if(req.url == '/contact'){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain")
        res.end("Contact page")

    }else if(req.url == '/product'){

        
const option = {
    hostname:"fakestoreapi.com",
    path:"/products/10",
    method:"GET"
}

const apiReq = http.request(option,(apiRes)=>{
    apiRes.on("data",(data) =>{
        res.statusCode = 200;
        res.setHeader = ("content-type",'application/json')
        res.end(data.toString())
    })
})

apiReq.on("error", ()=> {
    console.log(e)
})

apiReq.end()
    }else{
        res.statusCode = 500;
        res.setHeader("Content-Type",'text/plain')
        res.end("Error")
    }
})


server.listen(port,()=>{
    console.log(`running on ${port} port`)
    
})