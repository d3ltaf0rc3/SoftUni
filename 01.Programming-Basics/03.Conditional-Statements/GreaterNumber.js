function greaterNumber(input) {
    let numA = Number(input.shift());
    let numB = Number(input.shift());

    if (numA > numB) {
        console.log(numA);
    } else {
        console.log(numB);
    }
}

greaterNumber(["5", "3"]);