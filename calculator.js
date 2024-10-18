let num1 = '';
let num2 = '';
let isOp = false;
let op = '';
let total = '';

const screen = document.querySelector('#display');
const btn_num = document.querySelectorAll('.num');
const btn_deci = document.querySelector('.decimal');
const btn_op = document.querySelectorAll('.op');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const back = document.querySelector('#back');

//Gets Number 1 or 2
btn_num.forEach(function(numButton) {
    numButton.addEventListener('click', function(e) {
        if (num1 === '') {
                num1 = e.target.id;
                screen.textContent = `${num1}`
        } else if (!isOp) {
                num1 += e.target.id
                screen.textContent = `${num1}`
        } else if (num2 === '') {
            num2 = e.target.id
            screen.textContent = `${num2}`
        } else {
            num2 += e.target.id
            screen.textContent = `${num2}`
        }
    })
});

//Adds decimal place but only allows one 
btn_deci.addEventListener('click', function(){
    if (num1 === '') {
        num1 = `0.`
        screen.textContent = `${num1}`        
    } else if(!isOp && !(num1.includes('.'))) {
        num1 += `.`
        screen.textContent = `${num1}`
    } else if (isOp && num2 === '') {
        num2 = `0.`
        screen.textContent = `${num2}`        
    } else if (isOp && !(num2.includes('.'))){
        num2 += `.`
        screen.textContent = `${num2}` 
    }
});

// gets operator but also operates if operator is pressed before equals
btn_op.forEach(function(opButton) {
    opButton.addEventListener('click', function(e) {
        getOp(e.target.id)
    })
});

// operates
equals.addEventListener('click', function(){
    if (num1 != '' && num2 != '') {
        operate(num1, op, num2);
    }
});

clear.addEventListener('click', function() {
    clearVars();
});

back.addEventListener('click', function(){
    backspaceNum();
});

// operator functions
function add(num1, num2) {
    total = num1 + num2;
    return total;
};

function subtract(num1, num2) {
    total = num1 - num2;
    return total;
};

function multiply(num1, num2) {
    total = num1 * num2;
    return total;
};

function divide(num1, num2) {
    if (num2 === 0) {
        alert('You cant divide by zero!')
        clearVars();
    } else {
        total = num1 / num2;
        return total;  
    }

};

// operation 
function operate() {      
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (op === 'add'){
        add(num1,num2);
    } else if (op === 'subtract'){
        subtract(num1,num2);
    } else if (op === 'multiply'){
        multiply(num1,num2);
    } else if (op === 'divide'){
        divide(num1,num2);
    } else {
        alert('Sorry, I couldnt understand that.');
        console.log(`${num1},${op},${num2} `)
        clearVars();
    }
    // rounds to two decimal places and then clears everything and makes total new number 1
    total = (Math.round(total * 100) / 100);
    screen.textContent = `${total}`;
    num1 = total;
    num2 = '';
    isOp = false;
    op = '';
    total = '';  
};

// start fresh
function clearVars() {
    num1 = '';
    num2 = '';
    isOp = false;
    op = '';
    total = '';
    screen.textContent = '';
};

// deletes last character of either number 1 or number 2
function backspaceNum(){
    if (!isOp) {
        num1 = num1.slice(0,-1);
        screen.textContent = `${num1}`
    } else {
        num2 = num2.slice(0,-1);
        screen.textContent = `${num2}`
    }
}

function getOp(operator) {
    if (isOp) {
        let tempOp = keyOp;
        operate(num1, op, num2)
        isOp = true;
        op = operator;
    } else {
        op = operator;
        isOp = true;
    }
}
//keyboard support

document.addEventListener('keydown', function(e){
    const key = e.key;
    console.log(key);
    const arrNums = ['0','1','2','3','4','5','6','7','8','9','0'];
    const arrOps = ['+','-','*','/']

    //For the numbers
    if (arrNums.includes(key)) {
        if (num1 === '') {
            num1 = key;
            screen.textContent = `${num1}`;
        } else if (!isOp) {
            num1 += key;
            screen.textContent = `${num1}`;
        } else if (num2 === '') {
            num2 = key;
            screen.textContent = `${num2}`;
        } else {
            num2 += key;
            screen.textContent = `${num2}`;
        }

    //For the operators
    } else if (arrOps.includes(key)){
        if (key === '+') {
            getOp('add')
        } else if (key === '-') {
            getOp('subtract')
        } else if (key === '*') {
            getOp('multiply')
        } else if (key === '/') {
            getOp('divide')
        }

    //For the decimals
    } else if (key === '.') {
        if (num1 === '') {
            num1 = `0.`
            screen.textContent = `${num1}`        
        } else if(!isOp && !(num1.includes('.'))) {
            num1 += `.`
            screen.textContent = `${num1}`
        } else if (isOp && num2 === '') {
            num2 = `0.`
            screen.textContent = `${num2}`        
        } else if (isOp && !(num2.includes('.'))){
            num2 += `.`
            screen.textContent = `${num2}` 
        }

    //For the equals
    } else if (key === '=' || key =='Enter') {
        if (num1 != '' && num2 != '') {
            operate(num1, op, num2);
        }
    //For the backspace
    } else if (key === 'Backspace'){
        backspaceNum();
    } else if (key === 'c') {
        clearVars();
    }
});