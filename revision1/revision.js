// Data Types 

// There are two types of data types 
// i) PRimitive Data Type.
// ii)non-Primitive Data Type.




// to differtiate between primitive and non primitive data types.  primitive data types are single value.


// Primitive data types





// Basic of any programming language

    // 1)values.
    // 2)Operation.
    // 3)variables.
    // 4)Descision.
    // 5)loops.
    // 6)Function.


// These Are Primitive Data Types.

// primitive data types are immutable means their values can not be changed onces they created.If you modify the primitive value ,new value created in memory.


    // 1) Values


    // i)Number  ii) string   iii) null  iv) Undefined.



    // Non Primitive Data Types


    // i) Array         ii) Objects


    // i) Array = Array is represented by  []. Array  can have different data types of values  only in javascript.

    // ii) Objects = Objects are represented by {}.Object have key value pair. To access any value there two method first is dot method and secound is Bracket method.



    // 2)  Variables


    // To store value in variables.
    // placeholder for value is variables.
    // var,let and const way tio assign variables.





    // 3) Operators

    // logical calculation 

    // assignment Operator

    // 2+2     ,"+" is operator and "2" values are operand.

    // unary operator means only one operand.
    // and binart operatore means two or more operand.



    // arithmatic operator = +, - , * , / , % , **   These are arithmatic operator

    // % is modulo means   it gives remainder.
    // ** it is expotenital  and power



    // comoparision operator


    // ==  is used check both values are same or not not thier data types.
    // === check both data types and values

    // >  grater than  
    // <  less than.



    // ---------------------------------------------------------------------------------------------------------


    // REVISION  CLASS 2


    // conditions
let i =false
    if(i){
        console.log("this is true")
    }else{
        console.log("this is false")
    }




    if(true){
        console.log("yes")
    }else if(false){
        console.log("no")
    }else{
        console.log("may be")
    }

    // if multiple condition are there then.

    // use  if ---- else if ----else
    
    


    // ternary operator


    let name = true;


    name ? console.log("ternary true") : console.log("ternary False")



    // Switch and case

// switch and case used when we have multiple conditions


let day  = 7;
switch(day){
    case 1:
        console.log("monday")
        break;
    case 2:
            console.log("tuesday")
            break;
    case 3:
            console.log("Wednesday")
            break;
    case 4:
            console.log("Thusday")
            break;
    case 5:
            console.log("Friday")
            break;
    case 6:
            console.log("Satuday")
            break;
    default:
        console.log("Sunday")
        }




        // Loops

        // loops ofr array is forEach
        // loops for object is for of

        // 1)  for loops

        for(let i=0 ;i< 5;i++){
            console.log(i)

        }



        // loops in Object


        let obj = {
            name:"Sagar suryawanshi",
            agr:29,
            address:"Bhandara",
            pin:441904
        }

// for in loop

        for(let i in obj){
            console.log(i,"=",obj[i])
        }

        // i is key in obj, and obj[i] is value of keys.


        // for of loop
        let arr = [1,3,4,5,7,8,5,4]
        for(const i of arr){
            console.log(i)
        }


        // while loop

        let a = 10;
        while(a<=15){
            console.log(a)
            a++
        }


// -----------------------------------------------------------------------------------------------------------

// REVISION cLASS 3

// array and Objects


let names = new Array("sagar","Suryawanshi")
console.log(names)


// methods of Array

// push method
// push method add one or more element to the end of the array.

names.push("anand","nanda")
console.log(names)
