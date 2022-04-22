export default class NumberButton {
    constructor(btn, calculatorHead) {
        this.btn = btn;
        this.calculatorHead = calculatorHead;
        this.num = this.btn.innerHTML;
        this.btn.addEventListener("click", () => {
            this.addNumber();
        });
    }
    addNumber() {
        if (this.num == "00" & this.calculatorHead.innerHTML == "0") {
            return
        }
        if (this.calculatorHead.innerHTML == "0" & this.num != ".") {
            this.calculatorHead.innerHTML = "";
        }
        this.calculatorHead.innerHTML += this.num;
    }
}