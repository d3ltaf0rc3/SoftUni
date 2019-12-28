function binaryDigitsCount(n, b) {
    n = n.toString(2);
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (Number(n[i]) === b) {
            count++;
        }
    }
    console.log(count);
}

binaryDigitsCount(10, 0);