// features of server

//  Sending HTTP request - The http.request() method can be used to send HTTP requests from a Node.js


// http module is buit in module in Node.js providing functionality for creating and interating with http server and client.
// it provides simple way to create http server and handel http responses.

// features are as follows
const http = require("http")
// http.request()  is a function in node.js that is a part in http module,it isd used to make http request to other servers.


const option = {
    hostname:"fakestoreapi.com",
    path:"/products/3",
    method:"GET"
}


// const apiReq = http.request(option,(apiRes)=>{
//     apiRes.on("data",(data) =>{
//         console.log(data.toString())
//     })

//     apiReq.on("error",()=>{
//         console.log(e)
//     })
// })
// apiReq.end()

const apiReq = http.request(option,(apiRes) => {
    apiRes.on("data",(data) =>{
        console.log(data.toString())
    }) 

    apiReq.on("error",() =>{
        console.log(e)
    })
})
apiReq.end();