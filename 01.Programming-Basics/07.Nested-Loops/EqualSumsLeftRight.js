function equalSums(input) {
    let number1 = Number(input.shift());    //10,000
    let number2 = Number(input.shift());    //10,100
    let result = "";
    let leftSum = 0;
    let rightSum = 0;
    let middleNum = 0;

    for (let num = number1; num <= number2; num++) {
        let numString = num.toString();
        middleNum = numString[2];

        for (let i = 0; i < numString.length; i++) {
            let symbol = numString[i];
            
            if (i <= 1) {
                leftSum += Number(symbol);
            } else if (i >= 3) {
                rightSum += Number(symbol);
            }
        }
        if (leftSum == rightSum) {
            result += numString + " ";
        } else {
            if (leftSum < rightSum) {
                leftSum += Number(middleNum);
            } else {
                rightSum += Number(middleNum);
            }
            if (leftSum == rightSum) {
                result += numString + " ";
            }
        }
        leftSum = 0;
        rightSum = 0;
    }
    console.log(result);
}
equalSums(["10000", "10100"]);