function largestNum(firstNum, secondNum, thirdNum) {
    let result;
    if (firstNum > secondNum && firstNum > thirdNum) {
        result = firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        result = secondNum;
    } else if (thirdNum > firstNum && thirdNum > secondNum) {
        result = thirdNum;
    }
    console.log(`The largest number is ${result}.`);
}

largestNum();