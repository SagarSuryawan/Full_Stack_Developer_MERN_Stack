// Build a Server Using Http Module NodeJS with api endpoints for Getting Products Data
// ‘/’ → send msg as “Welcome to Men & Women Dummy Data”
// ‘/men’ → send 10 products data of men
// ‘/women’ →send 10 products data of wome;
// ‘/other’→ send response as page not found
// Hint: You can use any data, send data in json format



const http = require("http")
const port = 3012;

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader = ('Content-Type','text/plain')
        res.end('Welcome to Men & Women Dummy Data')
    }else if(req.url == '/men'){
        res.statusCode = 200;
        res.setHeader = ('Content-Type','application/json')
        const menProduct = dummydata(10,'men')
        res.end(JSON.stringify(menProduct))
    }else if(req.url == '/women'){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        const womenProduct = dummydata(10,'women')
        res.end(JSON.stringify(womenProduct))
    }else{
        res.statusCode = 404;
        res.end('Page not found')
    }
})

function dummydata(count,category){
    let product = []
    for(let i=1;i<=count;i++){
        product.push({id:i,category:`${category}`,})
    }
    return product
}

server.listen(port,()=>{
    console.log(`server running on ${port}`)
})