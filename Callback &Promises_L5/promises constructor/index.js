 const mypromise = new Promise((resolve,reject) => {

let randomNum = Math.random()

if(randomNum > 0.5){
    resolve(`The promise is resolved,Greather than ${0.5}`)
}else{
    reject(`The promise is Rejected ,Less than ${0.5}`)
}  

 })

 console.log(mypromise)



//  .then and .catch


// mypromise.then((result) =>{
//     console.log(mypromise)
// }).catch((err)
//     console.log("err",err)
// )
   

mypromise.then((result) => {
    console.log(result)
})

.catch((error) => {
    console.log(error)
});
