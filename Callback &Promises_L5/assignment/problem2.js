// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
// with the manipulated string or the new string to the console.


function manipulateString (inputString,callback){
    const manipulated = inputString.toUpperCase();

    callback(manipulated);
}


function longString(manipulated) {
    console.log(`Upercase string = ${manipulated}`)
}

manipulateString("pw skills",longString)