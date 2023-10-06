const fs = require("fs");


const data = "Node.js is runtime enviorment for javascript.";

fs.writeFile('nodejs_architecture.txt', data, (err) => {
    if(err){
        console.log("Error",err);
    }else{
        console.log("Suceessful")
    }
  });