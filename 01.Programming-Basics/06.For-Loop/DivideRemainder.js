function divide(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if (number % 2 == 0) {
            p1++;
        }
        if (number % 3 == 0) {
            p2++;
        }
        if (number % 4 == 0) {
            p3++;
        }
    }
    p1 = p1 / n * 100;
    p2 = p2 / n * 100;
    p3 = p3 / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}

divide();