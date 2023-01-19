

let operandA = 0;
let operandB = 0;
let operator = '';
let resultado;



let elementScreen = document.getElementsByClassName("calculator__result")[0];

let elementOperand = document.getElementsByClassName('button--operand');
let elementOperator = document.getElementsByClassName('button--operator');

let elementClear = document.getElementsByClassName('button--clear')[0];
let elementEqual = document.getElementsByClassName('button--equal')[0];





let showInResultado = (x)=> {
    elementScreen.textContent += x;
};

let clearScreen = ()=>{
    elementScreen.textContent = '';
};

let reset = ()=>{
    elementScreen.textContent = '';
    operandA = 0;
    operandB = 0;
    operator = '';

};

let operate = (x)=>{
    operandA = elementScreen.textContent;
    operator = x;
    showInResultado(x);   
};

console.log(operandA);
console.log(operandB);
console.log(operator);

let equal = ()=>{
    operandB = elementScreen.textContent[2];
    resolve();
};

let resolve = ()=>{
    let resp = 0;
    switch (operator) {
        case "+":
            resp = parseInt(operandA) + parseInt(operandA)
            break;

        case "-":
            resp = parseInt(operandA) - parseInt(operandA)
            break;

        case "*":
            resp = parseInt(operandA) * parseInt(operandA)
            break;

        case "/":
            resp = parseInt(operandA) / parseInt(operandA)
            break;

    }
    
    elementScreen.textContent = resp;
};



for(let i = 0; i<elementOperand.length;i++){
    elementOperand[i].addEventListener('click',function() {showInResultado(elementOperand[i].value)});
}


for(let i = 0; i<elementOperator.length;i++){
    elementOperator[i].addEventListener('click',function() {operate(elementOperator[i].value)});
}

elementClear.addEventListener('click', clearScreen);

elementEqual.addEventListener('click',function() {equal()});