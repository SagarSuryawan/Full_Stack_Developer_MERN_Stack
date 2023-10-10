const fs = require("fs");


const new_data = " compared to other server side language,node.js has distinct advantages.It asynchronous model and non-blocking I/O operation improve scalability and performance of web application build on other framworks.Node.js can easily handel multiple client request without requiring multiple threads ,consuming less memeory and resources.Additionally ,it is highly scalable and provides high performance.Node.js is also flexiable with multiple framworks and make the development process easier.";

fs.appendFile('nodejs_architecture.txt', new_data, (err) => {
    if(err){
        console.log("Error",err);
    }
    fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error:', err);
          return;
        }
    
        console.log('nodejs_architecture.txt', data);
      });
  });