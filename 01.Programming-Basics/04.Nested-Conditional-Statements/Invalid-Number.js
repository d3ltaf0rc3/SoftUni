function invalidNumber(input) {
    let number = Number(input.shift());

    if (!(number >= 100 && number <= 200 || number == 0)) {
        console.log("invalid");
    }
}

invalidNumber([99]);