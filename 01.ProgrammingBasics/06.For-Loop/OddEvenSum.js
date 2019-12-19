function oddEvenSum(input) {
    let n = Number(input.shift());
    let evenSum = 0;
    let oddSum = 0;
    let difference = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (i % 2 == 0) {
            evenSum += num;
        }
        else {
            oddSum += num;
        }
    }
    difference = Math.abs(evenSum - oddSum);
    if (evenSum == oddSum) {
        console.log(`Yes\nSum = ${evenSum}`);
    }
    else {
        console.log(`No\nDiff = ${difference}`);
    }
}

oddEvenSum();