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

function operate(operator, a, b) {
    switch (operator) {
        case "add":
            return add(a, b);
            break;
        case "subtract":
            return subtract(a, b);
            break;
        case "multiply":
            return multiply(a, b);
            break;
        case "divide":
            return divide(a, b);
            break;
        default:
            break;
    }
};


//1. if clickValue === operand/number then concat
//2. else if clickValue === operator/+
//then save displayedValue to numOne
//save clickedValue to operator and concat " + " to displayedValue
//fontSize = contWidth * maxFontSize / textWidth

const display = document.getElementById('display');
let displayValue = "", numTwo = "";

const allButtons = document.querySelectorAll('button');
allButtons.forEach(element => {
    element.addEventListener('click', event => {
        let clickValue = `${event.target.value}`;

        if (!(event.target.classList.contains('operator'))) {

            displayValue = displayValue + clickValue;
            display.innerText = displayValue;
        } else {
            switch (clickValue) {
                case "clear":
                    displayValue = "";
                    display.innerText = "0";
                    break;
                default:
                    break;
            };
        }
    });
});

