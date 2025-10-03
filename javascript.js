let add = (first, second) => first + second;
let subtract = (first, second) => first - second;
let multiply = (first, second) => first * second;
let divide = (first, second) => first / second;

let firstNum;
let operator;
let secondNum;

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