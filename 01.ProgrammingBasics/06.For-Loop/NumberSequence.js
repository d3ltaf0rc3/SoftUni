function numSequence(input) {
    let n = Number(input.shift());
    let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if (number > maxNum){
            maxNum = number;
        }
        if (number < minNum){
            minNum = number;
        }
    }
    console.log(`Max number: ${maxNum}`);
    console.log(`Min number: ${minNum}`);
}

numSequence(["5", "10", "20", "304", "0", "50"]);