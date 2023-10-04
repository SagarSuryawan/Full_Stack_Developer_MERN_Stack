const x = require("path")
// console.log(x)
console.log(x.sep)
// console.log(process.env.PATH)


const currentFilePath = __filename
console.log("current file path=>",currentFilePath)
// current file path


const currentDirectoryPath = __dirname;
console.log("currentdirectory=>",currentDirectoryPath)
// current folder[directory] path


const fileNameAndExtension = x.basename(currentFilePath)
console.log("basename=>",fileNameAndExtension)
// filename and extension

const onlyFileName = x.basename(currentFilePath,".js")
console.log("onlyfilename=>",onlyFileName)
// only filename  no extension


const dirname = x.dirname(currentFilePath)
console.log("dir_name=>",dirname)



const combine = x.format({
    dir:"\public_html\home",
    base:"index.js"
})
console.log("combine=>",combine)
// combine dirctory and basename


const relativeOrabsolute = x.isAbsolute(currentFilePath)
console.log("relativeOrabsolute",relativeOrabsolute)
// check wheather file path absolute or 

const joinPath = x.join("\home","js","indes.html")
console.log("joinpaths=>",joinPath)
// join multiple paths


console.log(x.parse(currentFilePath))
// parse path




