import NumberButton from "./NumberButton.js";
import OperationButton from "./OperationButton.js";
import Calc from "./Calculations.js";

let numberBtns = document.getElementsByClassName("num-btn");
let operationBtns = document.getElementsByClassName("operation");
let calculatorHead = document.querySelector("#num-head");

let delBtn = document.querySelector("#del-btn");
let clearBtn = document.querySelector("#clear-btn");
let equalBtn = document.querySelector("#equal-btn");

for (const btn of numberBtns) {
    new NumberButton(btn, calculatorHead);
}

for (const btn of operationBtns) {
    new OperationButton(btn, calculatorHead);
}

delBtn.addEventListener("click", () => {
    let x = calculatorHead.innerHTML;
    x = x.split("");
    x.pop();
    x = x.join("");
    calculatorHead.innerHTML = x;
    if (calculatorHead.innerHTML == "") {
        calculatorHead.innerHTML = "0";
    }
});

clearBtn.addEventListener("click", () => {
    calculatorHead.innerHTML = "0";
});

equalBtn.addEventListener("click", () => {
    new Calc(calculatorHead);
});