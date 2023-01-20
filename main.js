

//Variables:

let operandA = 0;
let operandB = 0;
let operator = '';
let resultado;


//Identificación de cada elemento:

let elementScreen = document.getElementsByClassName("calculator__result")[0];

let elementOperand = document.getElementsByClassName('button--operand');
let elementOperator = document.getElementsByClassName('button--operator');

let elementClear = document.getElementsByClassName('button--clear')[0];
let elementEqual = document.getElementsByClassName('button--equal')[0];


//Funciones:

let showInResultado = (x)=> {
    elementScreen.textContent += x;
};

let clearScreen = ()=>{
    elementScreen.textContent = '';
};

let reset = ()=>{
    clearScreen();
    operandA = 0;
    operandB = 0;
    operator = '';

};

let operate = (x)=>{
    operandA = elementScreen.textContent;
    clearScreen();
    operator = x;
      
};

let equal = ()=>{
    operandB = elementScreen.textContent;
    resolve();
};

let resolve = ()=>{
    
    switch (operator) {
        case "+":
            resultado = parseFloat(operandA) + parseFloat(operandB)
            break;

        case "-":
            resultado = parseFloat(operandA) - parseFloat(operandB)
            break;

        case "*":
            resultado = parseFloat(operandA) * parseFloat(operandB)
            break;

        case "/":
            resultado = parseFloat(operandA) / parseFloat(operandB)
            break;
    }
    
    elementScreen.textContent = resultado;
};


//Eventos:

for (let i = 0 ; i<elementOperand.length ; i++){
    elementOperand[i].addEventListener('click',function() {showInResultado(elementOperand[i].value)});
};

for (let i = 0 ; i<elementOperator.length ; i++){
    elementOperator[i].addEventListener('click',function() {operate(elementOperator[i].value)});
};

elementClear.addEventListener('click', clearScreen);

elementEqual.addEventListener('click',function() {equal()});