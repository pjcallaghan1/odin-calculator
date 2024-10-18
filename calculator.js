let num1 = 0
let num2 = 0
let operator = ''

const display = document.getElementById('display');

function add(num1, num2) {
    let addedNum = num1 + num2;
    return addedNum;
};

function subtract(num1, num2) {
    let addedNum = num1 - num2;
    return addedNum;
};

function multiply(num1, num2) {
    let addedNum = num1 * num2;
    return addedNum;
};

function divide(num1, num2) {
    let addedNum = num1 / num2;
    return addedNum;
};

function operate(operator, num1, num2) {
    if (operator === 'add'){
        add(num1,num2);
    } else if (operator === 'subtract'){
        subtract(num1,num2);
    } else if (operator === 'multipy'){
        multiply(num1,num2);
    } else if (operator === 'divide'){
        divide(num1,num2);
    } else {
        alert('Sorry, I couldnt understand that.')
    }
};