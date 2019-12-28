function sumEvenNums(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = Number(numbers[i]);
        if (element % 2 === 0) {
            sum += element;
        }
    }
    console.log(sum);
}

sumEvenNums(['1','2','3','4','5','6']);