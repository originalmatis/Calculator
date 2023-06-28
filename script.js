const screenContent = document.querySelector("#screenContent")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const zero = document.querySelector("#zero")
const devide = document.querySelector("#devide")
const multiply = document.querySelector("#multiply")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const squareRoot = document.querySelector("#squareRoot")
const square = document.querySelector("#square")
const equals = document.querySelector("#equals")
const dot = document.querySelector("#dot")

let operation
let firstNumber = ""
let secondNumber = ""

one.addEventListener("click", numberClick);
two.addEventListener("click", numberClick);
three.addEventListener("click", numberClick);
four.addEventListener("click", numberClick);
five.addEventListener("click", numberClick);
six.addEventListener("click", numberClick);
seven.addEventListener("click", numberClick);
eight.addEventListener("click", numberClick);
nine.addEventListener("click", numberClick);
zero.addEventListener("click", numberClick);
dot.addEventListener("click", numberClick);
devide.addEventListener("click", operationClick);
multiply.addEventListener("click", operationClick);
plus.addEventListener("click", operationClick);
minus.addEventListener("click", operationClick);
squareRoot.addEventListener("click", operationClick);
square.addEventListener("click", operationClick);
equals.addEventListener("click", calculateClick);


function numberClick(){
    screenContent.textContent = screenContent.textContent + this.textContent
    
}

function operationClick(){
    operation = this.textContent
    firstNumber = Number(screenContent.textContent)
    screenContent.textContent = ""
    console.log(firstNumber)
    console.log(operation)
}

function calculateClick(){
    secondNumber = Number(screenContent.textContent)
    if(operation == "+"){
        screenContent.textContent = firstNumber + secondNumber
    } else if(operation == "-"){
        screenContent.textContent = firstNumber - secondNumber
    } else if(operation == "X"){
        screenContent.textContent = firstNumber * secondNumber
    } else if(operation == "/"){
        screenContent.textContent = firstNumber / secondNumber
    } else if(operation == "^"){
        screenContent.textContent = Math.sqrt(firstNumber, secondNumber)
    } else if(operation == "x²"){
        screenContent.textContent = Math.pow(firstNumber, secondNumber)
    }
} 

