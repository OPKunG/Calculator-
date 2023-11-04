// script.js

let currentInput = '';
let currentOperator = '';
let currentResult = '';

function appendValue(value) {
    currentInput += value;
    updateResultDisplay();
}

function appendOperator(operator) {
    currentOperator = operator;
    currentResult = currentInput;
    currentInput = '';
    updateResultDisplay();
}

function calculateResult() {
    if (currentInput !== '') {
        switch (currentOperator) {
            case '+':
                currentResult = String(Number(currentResult) + Number(currentInput));
                break;
            case '-':
                currentResult = String(Number(currentResult) - Number(currentInput));
                break;
            case '*':
                currentResult = String(Number(currentResult) * Number(currentInput));
                break;
            case '/':
                currentResult = String(Number(currentResult) / Number(currentInput));
                break;
        }
        currentInput = '';
        currentOperator = '';
        updateResultDisplay();
    }
}

function clearResult() {
    currentInput = '';
    currentOperator = '';
    currentResult = '';
    updateResultDisplay();
}

function updateResultDisplay() {
    document.getElementById('result').value = currentResult + currentOperator + currentInput;
}
