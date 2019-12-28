function histogram(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if (number < 200) {
            p1++;
        }
        else if (number >= 200 && number <= 399) {
            p2++;
        }
        else if (number >= 400 && number <= 599) {
            p3++;
        }
        else if (number >= 600 && number <= 799) {
            p4++;
        }
        else if (number >= 800) {
            p5++;
        }
    }
    p1 = p1 / n * 100;
    p2 = p2 / n * 100;
    p3 = p3 / n * 100;
    p4 = p4 / n * 100;
    p5 = p5 / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram();