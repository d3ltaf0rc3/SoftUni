function mathOperations(firstNum, secondNum, str) {
    let result;
    switch (str) {
        case "+": result = Number(firstNum) + Number(secondNum); break;
        case "-": result = firstNum - secondNum; break;
        case "*": result = firstNum * secondNum; break;
        case "/": result = firstNum / secondNum; break;
        case "%": result = firstNum % secondNum; break;
        case "**": result = firstNum ** secondNum;
    }
    console.log(result);
}

mathOperations();