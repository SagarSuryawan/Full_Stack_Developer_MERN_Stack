// Hof function are those function can accept a function as a argument.
// callback is a function that is pass as an argument to another number.callback funcion useful when you want to execute multiple task at the same time

// Example one =
function h(x,fn){
    // h is hof 
    // fn is callback function

    console.log(x*x)
    fn()
}

h(10,function (){
    console.log("done with call back")
})




// example two =

function x(a,fn){
    console.log(a*a)
    fn(a*a)
}
x(5,exec)

function exec(n){
    console.log("Square value is",n)
}



// Synchronous Programming means code execution is line by line.Javascript is Synchrous Programming language.

// Nested Callback

console.log("Start");

// setTimeout(function ()
//  {
// console.log("Executing Function 01");
// setTimeout(function () {
// console.log("Executing Function 02");
// setTimeout(function () {
// console.log("Executing Function 03");
// }, 1000);
// }, 1000);
// }, 1000);


console.log("End");

setTimeout(function(){
    console.log("sagar")
    setTimeout(function(){
        console.log("anandrao")
        setTimeout(function(){
            console.log("suryawasnhi")
        },1000)
    },1000)
},1000)
