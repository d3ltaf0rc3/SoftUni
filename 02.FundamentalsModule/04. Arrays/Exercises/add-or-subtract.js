function addOrSubtract(numbers) {
    let originalSum = 0;
    let newSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = Number(numbers[i]);
        originalSum += element;
        if (element % 2 === 0) {
            numbers[i] = numbers[i] + i;
        } else {
            numbers[i] = numbers[i] - i;
        }
        newSum += numbers[i];
    }
    console.log(numbers);
    console.log(originalSum);
    console.log(newSum);
}

addOrSubtract([5, 15, 23, 56, 35]);