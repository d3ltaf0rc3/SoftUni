function operations(input) {
    let number1 = Number(input.shift());
    let number2 = Number(input.shift());
    let operator = input.shift();

    if (operator == "+") {
        let sum = number1 + number2;
        if (sum % 2 == 0) {
            console.log(`${number1} ${operator} ${number2} = ${sum} - even`);
        }
        else {
            console.log(`${number1} ${operator} ${number2} = ${sum} - odd`);
        }
    }
    else if (operator == "-") {
        let sum = number1 - number2;
        if (sum % 2 == 0) {
            console.log(`${number1} ${operator} ${number2} = ${sum} - even`);
        }
        else {
            console.log(`${number1} ${operator} ${number2} = ${sum} - odd`);
        }
    }
    else if (operator == "*"){
        let sum = number1 * number2;
        if (sum % 2 == 0) {
            console.log(`${number1} ${operator} ${number2} = ${sum} - even`);
        }
        else {
            console.log(`${number1} ${operator} ${number2} = ${sum} - odd`);
        }
    }
    else if (operator == "/"){
        let sum = number1 / number2;
        if (number2 == 0){
            console.log(`Cannot divide ${number1} by zero`);
        }
        else {
            console.log(`${number1} / ${number2} = ${sum.toFixed(2)}`);
        }  
    }
    else if (operator == "%"){
        let sum = number1 % number2;
        if (number2 == 0){
            console.log(`Cannot divide ${number1} by zero`);
        }  
        else {
            console.log(`${number1} % ${number2} = ${sum}`);
        }
    }
}

operations();