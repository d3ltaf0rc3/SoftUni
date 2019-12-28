function vowelsSum(input) {
    let string = input.shift();
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let letter = text[i];
        switch (letter) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
    }
    console.log(sum);

}

vowelsSum();