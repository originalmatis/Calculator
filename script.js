const btns = document.getElementsByClassName("btns");
const operators = document.getElementsByClassName("operators");
const equals = document.querySelector("#equals")
const screen = document.querySelector("input");
let x = 0
let firstNumber = ""
let operator
let secondNumber = ""
let firstNumberFinnal
let result



function addFirstNumber(){
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
        if(x === 0){ 
            firstNumberFinnal = firstNumber
            firstNumber = firstNumber + this.value
            screen.value = firstNumber
        }
        })
    }
}

function addSecondumber(){
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
        x++
        secondNumber = secondNumber + this.value
        screen.value = secondNumber
        })
    }
}

function addOperator (){
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", function () {
            operator = this.value
            screen.value = ""
            addSecondumber()
        });
    }
}


function calculator(firstNumberParameter,operatorParameter,secondNumberParameter){
    if(operatorParameter === "+"){
        result =  Number(firstNumberParameter) + Number(secondNumberParameter)
    } else if (operatorParameter === "-"){
        result =  Number(firstNumberParameter) - Number(secondNumberParameter)
    } else if (operatorParameter === "/"){
        result = Number(firstNumberParameter) / Number(secondNumberParameter)
    } else if (operatorParameter === "*"){
        result =  Number(firstNumberParameter) * Number(secondNumberParameter)
    } else {
        result = "error"
    }
    screen.value = result
}

function calc (){
    calculator(firstNumberFinnal,operator,secondNumber)
}

equals.addEventListener("click",calc)
addFirstNumber()
addOperator()
