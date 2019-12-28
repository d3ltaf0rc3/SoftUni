function equalPairs(input) {
    let n = Number(input.shift());
    let prevSum = 0;
    let max = 0;
    let difference = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        let num2 = Number(input.shift());
        let sum = num + num2;
        if (i != 0) {
            difference = Math.abs(sum - prevSum);

            if (difference > max) {
                max = difference;
            }
        }
        prevSum = sum;
    }

    if (max == 0) {
        console.log(`Yes, value=${prevSum}`);
    } else {
        console.log(`No, maxdiff=${difference}`)
    }
}

equalPairs(["1","5","5"]);