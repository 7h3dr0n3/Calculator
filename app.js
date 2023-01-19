function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};

function toOperate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            break;
    }
};

const calculator = document.querySelector('#container');
const buttons = calculator.querySelector('#buttons');
const display = calculator.querySelector('#display');

buttons.addEventListener('click', event => {
    if (event.target.matches('button')) {
        // console.log(event.target);

        const element = event.target;
        const action = element.dataset.action;
        const buttonValue = element.innerText;
        const displayedNum = display.innerText;
        // console.log(element, action);
        if (!action) {
            if (displayedNum === '0') {
                display.innerText = buttonValue;
            } else {
                display.innerText = displayedNum + buttonValue;
            }
        }

        if (action === "dot") {
            display.innerText = displayedNum + '.';
        }

        if (action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide") {
            display.innerText = "0";
            element.classList.add('clicked');
        }

        Array.from(element.parentNode.children)
            .forEach(k => k.classList.remove('clicked'));
    }
});