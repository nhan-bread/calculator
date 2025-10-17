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
        if ((firstNum) || (display.textContent == "0.")) {
            display.textContent += e.target.textContent;
        } else if (!firstNum) {
            display.textContent = e.target.textContent;
        }
        firstNum = display.textContent;
    }
    if (e.target.classList.contains("digit") && (operator)) {
        if ((secondNum) || (display.textContent == "0.")) {
            display.textContent += e.target.textContent;
        } else if (!secondNum) {
            display.textContent = e.target.textContent;
        }
        secondNum = display.textContent;
    }

    if (e.target.classList.contains("operator")) {
        if (!((operator === "÷") && (secondNum === "0"))) {
            operate(Number(firstNum), Number(secondNum));
            firstNum = display.textContent;
            operator = undefined;
            secondNum = undefined;
        } else if (!display.textContent == "You cannot divide by 0!") {
            firstNum = display.textContent;
        } else {
            display.textContent = "You cannot divide by 0!";
            firstNum = undefined;
            operator = undefined;
            secondNum = undefined;
            return;
        }
        operator = e.target.textContent;
    }

    if (e.target.classList.contains("calculate") && (secondNum)) {
        if (!((operator === "÷") && (secondNum === "0"))) {
            operate(Number(firstNum), Number(secondNum));
        } else {
            display.textContent = "You cannot divide by 0!";
        }
        firstNum = undefined;
        operator = undefined;
        secondNum = undefined;
    }

    if (e.target.classList.contains("clear")) {
        display.textContent = "";
        firstNum = undefined;
        operator = undefined;
        secondNum = undefined;
        if (!display.textContent) {
            display.textContent = "0";
        }
    }

    if (e.target.classList.contains("backspace") && (display.textContent)) {
        display.textContent = display.textContent.slice(0, -1);
        if (!operator) {
            firstNum = display.textContent;
        } else {
            secondNum = display.textContent;
        }
        console.log(firstNum);
        console.log(secondNum);
        if (!display.textContent) {
            display.textContent = "0";
        }
    }

    if (e.target.classList.contains("decimal")) {
        if (display.textContent.includes(e.target.textContent) && (!(display.textContent == firstNum))) return;
        if ((firstNum && operator && (!secondNum)) || (!firstNum)) {
            display.textContent = "0" + e.target.textContent;
        } else if (display.textContent) {
            display.textContent += e.target.textContent;
        }
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