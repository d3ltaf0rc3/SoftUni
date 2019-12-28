function specialNumbers(input) {
    let n = Number(input.shift());
    let result = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (Number.isInteger(n / i) && Number.isInteger(n / j) && Number.isInteger(n / k) && Number.isInteger(n / l)){
                        result += "" + i + j + k + l + " ";
                    }
                }
            }
        }
    }
    console.log(result)
}

specialNumbers([16]);