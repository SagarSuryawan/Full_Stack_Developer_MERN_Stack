// clouser
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


// lexial scoping is inner function hava access of outer vairable and outer function does not vhave access of inner variable.