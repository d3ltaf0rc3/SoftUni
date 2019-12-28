function returnOddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;
    let digit = 0;
    num = String(num);
    
    for (let i = 0; i < num.length; i++) {
        digit = num[i];
        if (digit % 2 === 0) {
            evenSum += Number(digit);
        } else {
            oddSum += Number(digit);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

returnOddAndEvenSum(1000435);