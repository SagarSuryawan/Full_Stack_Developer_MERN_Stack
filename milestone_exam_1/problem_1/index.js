
// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleQ


let btn = document.getElementById("check")

btn.addEventListener("click", () =>{

    let enterPassword = document.getElementById("Enter_password").value
    let reenterPassword = document.getElementById("ReEnter_password").value


    if(enterPassword == reenterPassword){
        console.log("Password Matched. Password validation Successful.")
        alert("Password Matched. Password validation Successful")
    }else{
        console.log("Password didn't match. Password validation unsuccessful")
        alert("Password didn't match. Password validation unsuccessful")
    }


})