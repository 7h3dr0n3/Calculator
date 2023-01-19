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
        const previousButton = calculator.dataset.previousButton;


        // console.log(element, action);
        if (!action) {
            if (displayedNum === '0' || previousButton === 'operation') {
                display.innerText = buttonValue;
                calculator.dataset.previousButton = 'number';
            } else {
                display.innerText = displayedNum + buttonValue;
            }
        }

        if (action === "dot") {
            if (!displayedNum.includes('.')) {
                display.innerText = displayedNum + '.';
            } else if (previousButton === 'operation') {
                display.innerText = '0.'
            }

            calculator.dataset.previousButton = 'dot';
        }

        if (action === "clear") {
            display.innerText = display.innerText.slice(0, -1);
            calculator.dataset.previousButton = 'clear';
        }

        if (action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide") {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.action;
            const secondValue = displayedNum;

            // calculator.dataset.secondValue = secondValue;

            if (firstValue && operator && previousButton !== 'operation') {
                const calcValue = toOperate(parseFloat(firstValue),
                    operator, parseFloat(secondValue));

                display.innerText = calcValue;
                calculator.dataset.firstValue = calcValue;
                console.log(firstValue, operator, secondValue, calcValue);
            } else {
                calculator.dataset.firstValue = displayedNum;
            }

            element.classList.add('clicked');
            calculator.dataset.previousButton = 'operation';
            calculator.dataset.action = action;
        }

        Array.from(element.parentNode.children)
            .forEach(k => k.classList.remove('clicked'));

        if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.action;
            let secondValue = displayedNum;

            // calculator.dataset.secondValue = secondValue;

            if (firstValue) {
                if (previousButton === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }
                const calcValue = toOperate(parseFloat(firstValue),
                    operator, parseFloat(secondValue));

                display.innerText = calcValue;

                console.log(firstValue, operator, secondValue, calcValue);
            }
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousButton = 'calculate';
        }
    }
});