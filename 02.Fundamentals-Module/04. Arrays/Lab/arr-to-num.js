function arrToNum(numbers) {
    while (numbers.length > 1) {
        let condensed = [];
        condensed.length = numbers.length - 1;
        for (let i = 0; i < numbers.length - 1; i++) {
            condensed[i] = numbers[i] + numbers[i + 1];
        }
        numbers = condensed;
    }
    console.log(numbers[0]);
}

arrToNum([2, 10, 3]);