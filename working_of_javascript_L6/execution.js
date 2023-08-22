
let a = 10;
let b = 20;

function sum(){
    let c = a+b;
    return c;
}

let c = sum()
console.log(c)



// javascript is single threded ,asynchronous programming language.
// before runs any javascript code,Global Execution contex is created,which runs code and scan it.
// global execution contex has two parts code and memory.

        // Execution Contex
        
    // | code     |    memory|
    // |__________|__________|
    // |          |          |
    // |          |          |
    // |          |          |
    // |__________|__________|


    // Global Execution contex first scan a whole code in code parts and all assign variables are undefined.
    // and function as it is scan.
    // memory assign all.
    // when function function gets called In global execution contex ,function create another execution contex,which is called local execution ccontex.
    // call stack tracks all global and local,execution contex.
    // In call stack first global execution contex is created after that any whenever function gets called 
    // local execution context is created in call stack.
    // once it's function complets is's execution ,local execution contex is removed from global execution contex.
    // after all the code and function complete it's execution global scope get remove from call stack and call stack gets empty.
