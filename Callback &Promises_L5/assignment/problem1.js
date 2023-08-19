// Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.



function double(arr,callback){

    const array = arr.map((num) => {
        return callback(num)
    }) 

    return array;
}

let arr = [1,2,3,4,5]

function callback(num){
    return num *2;
}

const result = double(arr,callback)
console.log(result)



