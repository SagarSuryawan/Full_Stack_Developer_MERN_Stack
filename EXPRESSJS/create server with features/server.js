const http = require("http")
// this is basic server creation 
const port = 3000;
//inside callback function req,res are two arguments passed which represent incoming request and outgoing responses  
const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    // res.statusCode is indicates that request is sucessfully prcessed.  
    res.setHeader("Content-type","text-plain")
    // this status that client recevied response  in  plain text .
    res.end('Hi server')
    // end function states that response is end with message response "Hi server" 
    

})

server.listen(port,() =>{
    console.log(`running on ${port}`)
})





