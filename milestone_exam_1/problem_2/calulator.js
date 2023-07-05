let form = document.getElementById("calulator");
const result_div = document.getElementById("result")


form.addEventListener("submit",(event) =>{
    event.preventDefault()
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("Num2").value)
    let operators = document.getElementById("operator").value

    console.log(num1,num2,operators)


    // calulagtion by switch case

    let result;
    switch(operators) {

            case "+":
            result = num1 + num2 ;
            break;

            case "-":
            result = num1 - num2 ;
            break;

            case "*":
            result = num1 * num2 ;
            break;

            case "/":
            result = num1 / num2 ;
            break;

            default:
            result.innerText = "Invalid Operator"
            return;
    }

    result_div.innerText = `Result: ${result}`;
})

