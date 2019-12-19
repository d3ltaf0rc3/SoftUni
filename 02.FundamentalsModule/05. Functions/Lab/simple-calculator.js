function simpleCalc(a, b, operator) {
    switch (operator) {
        case "multiply":
            let multiplication = (a, b) => a * b;
            console.log(multiplication(a, b));
            break;
        case "divide":
            let division = (a, b) => a / b;
            console.log(division(a, b));
            break;
        case "add":
            let result = (a, b) => a + b;
            console.log(result(a, b));
            break;
        case "subtract":
            let subtraction = (a, b) => a - b;
            console.log(subtraction(a, b));
            break;
    }
}

simpleCalc(5, 10, "multiply");