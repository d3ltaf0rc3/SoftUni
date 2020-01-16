function sameNums(num) {
    num = num.toString();
    let previousDigit = num[0];
    let isSame = true;
    let sum = Number(previousDigit);
    
    for (let i = 1; i < num.length; i++) {
        let currentDigit = num[i];
        if (currentDigit !== previousDigit) {
            isSame = false;
        }
        previousDigit = currentDigit;
        sum += Number(currentDigit);
    }
    
    console.log(isSame);
    console.log(sum);
}

sameNums(222);