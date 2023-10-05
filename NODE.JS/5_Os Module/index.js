
const os = require("os")
console.log("CPU architecture:"+ os.arch());
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.networkInterfaces())
console.log(os.release())