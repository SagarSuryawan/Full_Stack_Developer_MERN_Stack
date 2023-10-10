// features of server


// http module is buit in module in Node.js providing functionality for creating and interating with http server and client.
// it provides simple way to create http server and handel http responses.

// features are as follows
const http = require("http")
// http.request()  is a function in node.js that is a part in http module,it isd used to make http request to other servers.

const option = {
    hostname:"fakestoreapi.com",
    path:"/products/1",
    method:"GET"
}

const request = http.request(option,(res){
    res.on("data",(d) =>{
        process.stdout.write(d)
    })
})
