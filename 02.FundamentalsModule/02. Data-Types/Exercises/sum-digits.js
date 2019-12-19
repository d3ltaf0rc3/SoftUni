function sumDigits(number) {
    number = String(number);
    let sum = 0;
    for (let i = 0;i < number.length;i++){
        let symbol = number[i];
        sum += Number(symbol);
    }
    console.log(sum)
}

sumDigits(15);