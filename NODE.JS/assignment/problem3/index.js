// index.js

const fs = require('fs');

fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return err;
  }else{
    console.log("Data:",data);
  }
  
});
