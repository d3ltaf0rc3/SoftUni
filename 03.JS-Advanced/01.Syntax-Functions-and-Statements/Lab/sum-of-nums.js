function sumOfNums(n,m) {
    n = Number(n);
    m = Number(m);
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += Number(i);
    }
    console.log(sum);
}

sumOfNums('-8', '20');