
let counter = document.getElementById("count").innerText


let increment_btn = document.getElementById("increment")


// increment function by 1
const plusOne = ()=>{
    
console.log()
    let updaterCounter = document.getElementById("count").innerText = ++counter;

}

increment_btn.addEventListener("click",plusOne)


let decrement_btn = document.getElementById("decrement")


// decrement function by 1 

const minusOPne = ()=>{


 UpdatedCounter = document.getElementById("count").innerText = --counter;
}


decrement_btn.addEventListener("click",minusOPne)


// reset function

let reset = document.getElementById("reset")


reset.addEventListener("click",() =>{

    // let reset= document.getElementById("count").innerText = 0;

    counter = document.getElementById("count").innerText = 0
 })





