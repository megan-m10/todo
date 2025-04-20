export class CalculateService {

    private readonly calculate: string;
    private readonly updateCallback: (calculate: string) => void;

    private readonly numbers = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    private readonly operators = ['+', '-', '*', '/', '='];

    constructor(calculate: string,
                updateCallback: (calculate: string) => void) {
        this.calculate = calculate;
        this.updateCallback = updateCallback;
    }


    public disable(target: string): boolean {

        if (this.calculate.length === 0) {
            return false;
        }

        const latest = this.calculate[this.calculate.length - 1];

        if (this.operators.includes(target)) {
            if (this.numbers.includes(latest)) {
                return false;
            }
            return true;
        }

        if (this.numbers.includes(target)) {
            if (this.operators.includes(latest)) {
                return false;
            }
            if (this.numbers.includes(latest)) {
                if (target === '.') {
                    const lastNumber = this.calculate.split(/[+\-*/]/).pop();
                    if (lastNumber && lastNumber.includes('.')) {
                        return true;
                    }
                }
                return false;
            }
            return true;
        }
        return true;
    }

    public answer() {
        // eslint-disable-next-line no-eval
        const answer = eval(this.calculate);
        this.updateCallback(answer.toString());
    }
}

