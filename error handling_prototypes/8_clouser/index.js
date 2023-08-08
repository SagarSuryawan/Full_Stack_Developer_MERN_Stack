// clouser

// clouser are the function  that "remember" the variables from the outer enviorment where they were created,even if they used in different contex.

// EXAMPLE:-
function outer(){

    const outer = 2;
    console.log(outer)

    function inner(){
        const inner = 3;
        console.log(inner,outer)
    }

    inner()
}

outer();

// LEXIAL SCOPING

// lexial scoping is inner function hava access of outer vairable and outer function does not vhave access of inner variable.
// EXAMPLE:-

function outerState(){

    const item = "Dell laptop";

    function innerstate(){

        console.log(item)
    }

    innerstate();
}

outerState();


// outerstate() create a local variable "item" and a function called "innerstate".The innerstate() function is an inner function that defined inside outerState() and is available only within the body of the outerState function.inner function has no local variable or its own.since inner function  have access to the variable of outer funtion.


