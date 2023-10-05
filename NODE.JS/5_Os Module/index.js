
const os = require("os")
// retrive details about operating system of a computer.
console.log("archicutre:",os.arch());
console.log("Free memory",os.freemem());
console.log("Toal Memory",os.totalmem());
console.log("Network interfaces",os.networkInterfaces());
console.log("temp dir path",os.tmpdir());
console.log("endianness",os.endianness());
console.log("hostname:",os.hostname());
console.log("os type",os.type());
console.log("Platfrom",os.platform());
console.log("Last release",os.release());

