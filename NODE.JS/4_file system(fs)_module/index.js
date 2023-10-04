const { FILE } = require("dns");
const fs = require("fs");

// // THIS METHOD IS READINF A FILE
// console.log("read start")

// // asynchorouns way to read File
// fs.readFile('index.txt',function(err,data){
//     if(err){
//         console.log("error",err)
//         return err;
//     }
//     console.log(data.toString())
//     console.log("reading end")
//     return data;
// })

// console.log("other operations")


// // synchornous way

// const data = fs.readFileSync("index.txt");
// console.log('Data:',data.toString())
// console.log("data reading end")
// console.log("other stuuf")

//===========================================================================================================

// THIS METHOD IS TO WRITE ANT THING IN A FILE

// in this method older data is vanished and new data is added[overnight].
// THIS IS ASYNCHROUNS METHOD.
// fs.writeFile('index.txt','Sagar Suryawasnhi',function(err){
//     if(err){
//         console.log("error wrote in a file")
//     }else{
//         console.log("successfuly in writing in a file")
//     }
// })


//this is a synchronous method to write in a file. 

// let data = fs.writeFileSync('index.txt',"Sagar Anand Suryawanshi",function(err){
//     if(err){
//         console.log("error inn writing in a file")
//     }else{
//         console.log("sucessfull in a writing in file")
//     }
// })
// console.log(data)

// ===========================================================================================================

// THIS METHOD IS USED TO APPED IN FILE,THIS IS A ASYNCHROUS METHOD.

// fs.appendFile('index.txt'," From Bhandara",'utf8',function(err){
//     if(err)
//         if(err){
//                     console.log("error inn appending in a file")
//                 }else{
//                     console.log("sucessfull in a appending in file")
//                 }
// })


// // =============================================================================================================

// // DELETING FILES
// fs.unlink('index.txt',function(err){
//     if(err){
//         console.log("error in deleting files")
//     }else{
//         console.log("success in deleting files")
//     }
// })