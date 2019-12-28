function oddEvenPosition(input) {
    let n = Number(input.shift());
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        let num = Number(input.shift());

        if (i % 2 == 0) { //even
            if (num < evenMin) {
                evenMin = num;
            }
            if (num > evenMax) {
                evenMax = num;
            }
            evenSum += num;
        }
        else { //odd
            if (num < oddMin) {
                oddMin = num;
            }
            if (num > oddMax) {
                oddMax = num;
            }
            oddSum += num;
        }
    }
    if (oddMin == Number.MAX_SAFE_INTEGER && oddMax == Number.MIN_SAFE_INTEGER) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log("OddMin=No,");
        console.log("OddMax=No,");
    }
    else if (oddMin == Number.MAX_SAFE_INTEGER) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log("OddMin=No,");
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    else if (oddMax == Number.MIN_SAFE_INTEGER) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log("OddMax=No,");
    }
    else {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    
    if (evenMin == Number.MAX_SAFE_INTEGER && evenMax == Number.MIN_SAFE_INTEGER) {
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log("EvenMin=No,");
        console.log("EvenMax=No");
    }
    else if (evenMin == Number.MAX_SAFE_INTEGER) {
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log("EvenMin=No,");
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
    else if (evenMax == Number.MIN_SAFE_INTEGER) {
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log("EvenMax=No");
    }
    else {
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }

}

oddEvenPosition([ '6', '2', '3', '5', '4', '2', '1' ]);