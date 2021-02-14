function operations(input) {
    let number1 = Number(input.shift());
    let number2 = Number(input.shift());
    let operator = input.shift();
    let sum;

    if (operator === "+") {
        sum = number1 + number2;
    } else if (operator === "-") {
        sum = number1 - number2;
    } else if (operator === "*") {
        sum = number1 * number2;
    } else if (operator === "/") {
        if (number2 === 0) {
            console.log(`Cannot divide ${number1} by zero`);
        } else {
            sum = number1 / number2;
            console.log(`${number1} / ${number2} = ${sum.toFixed(2)}`);
        }
        return;
    } else if (operator === "%") {
        if (number2 === 0) {
            console.log(`Cannot divide ${number1} by zero`);
        } else {
            sum = number1 % number2;
            console.log(`${number1} % ${number2} = ${sum}`);
        }
        return;
    }

    if (sum % 2 === 0) {
        console.log(`${number1} ${operator} ${number2} = ${sum} - even`);
    }
    else {
        console.log(`${number1} ${operator} ${number2} = ${sum} - odd`);
    }
}

operations([3, 2, "%"]);