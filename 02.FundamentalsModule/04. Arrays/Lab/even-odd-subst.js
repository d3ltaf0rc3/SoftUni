function evenOddSubstraction(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    let diff = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = Number(numbers[i]);
        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }

    diff = evenSum - oddSum;

    console.log(diff);
}

evenOddSubstraction();