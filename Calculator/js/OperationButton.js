export default class OperationButton {
    constructor(btn, calculatorHead) {
        this.btn = btn;
        this.calculatorHead = calculatorHead;
        this.operation = this.btn.innerHTML;
        this.btn.addEventListener("click", () => {
            this.addOperation();
        });
    }

    addOperation() {
        if (this.operation == "-" && this.calculatorHead.innerHTML == "0") {
            this.calculatorHead.innerHTML = "-";
            return
        }
        this.calculatorHead.innerHTML += this.operation;
    }

}