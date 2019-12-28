function passwordGen(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let password = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 97; k < l + 97; k++) {
                let symbol = String.fromCharCode(k);
                for (let m = 97; m < l + 97; m++) {
                    let symbol2 = String.fromCharCode(m);
                    for (let o = 1; o <= n; o++) {
                        if (o > i && o > j) {
                            password += "" + i + j + symbol + symbol2 + o + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(password);
}

passwordGen([2, 4]);