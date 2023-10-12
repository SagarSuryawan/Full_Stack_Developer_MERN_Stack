const { createServer } = require("http");

const http = ("http");

const port = 3030;

const server = createServer((req,res) =>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain")
        res.end("Welcome to node.js home page")

    }else if (req.url == '/about'){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain")
        res.end("about page")

    }else if(req.url == '/contact'){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain")
        res.end("Contact page")

    }else if(req.url == '/product'){

        


        res.statusCode = 200
        res.setHeader("Content-Type",'application/json')
        res.end(JSON.stringify({productName: "Product 1"}));

    }else{
        res.statusCode = 500;
        res.setHeader("Content-Type",'text/plain')
        res.end("Error")
    }
})


server.listen(port,()=>{
    console.log(`running on ${port} port`)
})