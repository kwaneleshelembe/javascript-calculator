export default class Calc {
    constructor(calculatorHead) {
        this.expression = calculatorHead.innerHTML;
        this.operation = "";
        this.answer = "this.answer=";
        eval(this.answer + calculatorHead.innerHTML);
        calculatorHead.innerHTML = this.answer;
    }
}