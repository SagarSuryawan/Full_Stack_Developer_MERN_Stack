// try  & catch  

// try catch is a error handing or expection .It used to find and tackel to errors.

// syntax  

try{
    // is is a block of code that will check if there any errors in this block of code.If error found it will ignore try block and immediatly execute the catch block .

    let x = undefined

    console.log(x[0])

}catch(err){

    // it is used to address the error.catch block also have agrument "err",it used to print error ,find error which types of error it is
    console.log(err," sagar,error found")
}


// whith the help of try and catch if error found it shows that error detail and execute the furter code.


console.log("end")
console.log(56)