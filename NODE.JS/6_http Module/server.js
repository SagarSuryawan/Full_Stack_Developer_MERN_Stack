// what is http
// http stand hyper text transfer protocol.
// it is protocol used for transmitting data over the internet.HTTP defines how client and servers communicate with each other/
// 

const httpModule =  require("http");

const server = httpModule.createServer((req,res)=> {
    if(req.url === '/') {
        res.write('<p>SAGAR</p>');
    }
    res.end();
})

server.listen(5000);
console.log("running on 5000 port")

