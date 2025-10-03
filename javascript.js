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
    }
    if (e.target.classList.contains("digit") && (operator)) {
        if (!secondNum) {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
    }

    function operate(first, second) {
        switch(operator) {
            case "+":
                add(first, second);
                break;
            case "-":
                subtract(first, second);
                break;
            case "*":
                multiply(first, second);
                break;
            case "÷":
                divide(first, second);
                break;
        }
    }
}))