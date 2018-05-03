const operationType = prompt("Please enter the operation type, +, -, *, /")
const firstOperand = prompt("Please enter first operand")
const secondOperand = prompt("Please enter second operand")
let result
//perform operation

if(operationType =="+") {
    result = Number(firstOperand) + Number(secondOperand)
}  

else if (operationType =! null){
    result = "Error"
}

else if (firstOperand = !null){
    result = "Error"
}

else if (secondOperand = !null){
    result = "Error"
}

else if (oper =="-"){
    result = Number (firstOperand) - Number (secondOperand)
}
console.log ( `${firstOperand}  ${operandType} ${secondOperand} is `)
