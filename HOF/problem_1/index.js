
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 2 seconds before reversing the string. The reversed string should then be printed as output.


const input = "webDevelopment"

function reverse(input){
    let container = ""
    for(let i=input.length-1 ; i >= 0 ;i--){

        container += input[i]
    }
    console.log(container)
}




setTimeout(() =>{
    reverse(input)
},2000)