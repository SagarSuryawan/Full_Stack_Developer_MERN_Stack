const fs = require("fs");


const data = "Node.js is a platfrom that utlilize javascript and is primarily empolyed for developing web applicationthat are highly focused on input/outputoprations,but not limited to chat apllication and multimediawebsites.The Platfrom is constructedusing google chrome's V8 javascript engine.A web application is a type of software that executes on a server and is displayed by a client's browser that obtain all the application's resources over the internet ";

fs.writeFile('nodejs_architecture.txt', data, (err) => {
    if(err){
        console.log("Error",err);
    }else{
        console.log("Suceessful")
    }
  });