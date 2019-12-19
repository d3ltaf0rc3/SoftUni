function halfSumElement(input) {
    let max = Number.MIN_SAFE_INTEGER;
    let n = Number(input.shift());
    let sum = 0;
    let diff = 0;

    for (let i = 0; i < n; i++){
        let num = Number(input.shift());
        if (num >= max){
            max = num;
        }
        sum += num
    }
    sum -= max;
    diff = Math.abs(sum - max);
    if (sum == max){
        console.log(`Yes\nSum = ${sum}`);
    }
    else {
        console.log(`No\nDiff = ${diff}`);
    }
}

halfSumElement([ '7', '3', '4', '1', '1', '2', '12', '1' ]);