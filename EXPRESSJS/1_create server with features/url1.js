const http = require("http")

const port = 3401;

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader = ('Content-Type','text/plain')
        res.end('welcome to node js server home page,url1')
    }
    else if (req.url == '/about'){
        res.statusCode = 200;
        res.setHeader = ("Content-Type",'text/plain')
        res.end('information about server')
    }
    else if(req.url == '/help'){
        res.statusCode = 200;
        res.setHeader = ("content-Type","text/plain")
        res.end('help desk of server page')
    }
    else if(req.url == '/product'){

        const option = {
            hostname:"fakestoreapi.com",
            path:"/products/9",
            method:"GET"
        }
        const apiReq = http.request(option,(apiRes) =>{
            apiRes.on("data",(data) =>{
                res.statusCode = 200;
                res.setHeader =('Content-Type','application/json')
                res.end(data.toString())
            })
        })

        apiReq.on("error",()=>{
            console.log(e)
        })

        apiReq.end();
    }else{
        res.statusCode = 500;
        res.setHeader = ("Content-Type",'text/plain')
        res.end('error')
    }
})

server.listen(port,() =>{
    console.log(`server running in ${port} port`)
})