
const app = require('./app.js')
// This part is asking Node.js to load and execute the code in the file located at './app.js'.
// The require function is a way to bring code from another file (module) into the current file.

const PORT = process.env.PORT || 7500;
// if port found in enviorment variable or take 5000;

app.listen(PORT,() =>{
    console.log(`server running on ${PORT} port`)
})
