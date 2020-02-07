function processOddNums(input) {
    let output = [];
    input.forEach((element, index) => {
        if (index % 2 !== 0) {
            output.push(element * 2);
        }
    });
    console.log(output.reverse());
}

processOddNums();