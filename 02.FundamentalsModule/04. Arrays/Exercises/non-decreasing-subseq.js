function extractNums(numbers) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let result= [];
    for (let i = 0; i < numbers.length; i++) {
        let el = numbers[i];
        if (el >= biggestNum) {
            biggestNum = el;
            result.push(el);
        }
    }
    console.log(result.join(" "));
}

extractNums();

