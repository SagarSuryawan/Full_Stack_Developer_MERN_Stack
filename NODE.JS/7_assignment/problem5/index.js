

const fs = require('fs');


fs.unlink('nodejs_architecture.txt', (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }

  console.log('File Deleted Successfully');
});
