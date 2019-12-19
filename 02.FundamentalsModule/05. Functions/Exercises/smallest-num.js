function printSmallest(firstNum, secondNum, thirdNum) {
        let smallestNum = Number.MAX_SAFE_INTEGER;
        if (firstNum < smallestNum) {
                smallestNum = firstNum;
        } if (secondNum < smallestNum) {
                smallestNum = secondNum;
        } if (thirdNum < smallestNum) {
                smallestNum = thirdNum;
        }
        console.log(smallestNum);
}

printSmallest(3, 5, 7);