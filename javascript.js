let add = (first, second) => first + second;
let subtract = (first, second) => first - second;
let multiply = (first, second) => first * second;
let divide = (first, second) => first / second;

let firstNum;
let operator;
let secondNum;

const btns = Array.from(document.querySelectorAll("button"));
const display = document.querySelector(".display");

btns.forEach((btn) => btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("digit") && (!operator)) {
        if (!firstNum) {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
        firstNum = Number(display.textContent);
    }
    if (e.target.classList.contains("digit") && (operator)) {
        if (!secondNum) {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
        secondNum = Number(display.textContent);
    }

    if (e.target.classList.contains("operator")) {
        if ((operator) && (secondNum)) {
            operate(firstNum, secondNum);
            firstNum = Number(display.textContent);
            operator = undefined;
            secondNum = undefined;
        } else if (display.textContent) {
            firstNum = Number(display.textContent);
        }
        operator = e.target.textContent;
    }

    if (e.target.classList.contains("calculate") && (secondNum)) {
        operate(firstNum, secondNum);
        firstNum = undefined;
        operator = undefined;
        secondNum = undefined;
    }

    if (e.target.classList.contains("clear")) {
        display.textContent = "";
        firstNum = undefined;
        operator = undefined;
        secondNum = undefined;
    }

    function operate(first, second) {
        switch(operator) {
            case "+":
                display.textContent = round(add(first, second), 7);
                break;
            case "-":
                display.textContent = round(subtract(first, second), 7);
                break;
            case "*":
                display.textContent = round(multiply(first, second), 7);
                break;
            case "÷":
                display.textContent = round(divide(first, second), 7);
                break;
        }
    }

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
}))