function minNumber(input) {
    let n = Number(input.shift());
    let counter = 1;
    let min = Number.MAX_SAFE_INTEGER;
    let num = 0;

    while (counter <= n) {
        num = Number(input.shift());

        if (num < min) {
            min = num;
        }
        counter++;
    }

    console.log(min);
}

minNumber([2, 100, 99]);