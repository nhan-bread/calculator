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
        display.textContent += e.target.textContent;
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
        operator = e.target.textContent;
    }

    if (e.target.classList.contains("calculate") && (secondNum)) {
        operate(firstNum, secondNum);
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
                display.textContent = add(first, second);
                break;
            case "-":
                display.textContent = subtract(first, second);
                break;
            case "*":
                display.textContent = multiply(first, second);
                break;
            case "÷":
                display.textContent = divide(first, second);
                break;
        }
    }
}))