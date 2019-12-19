function oddTimes(input) {
    input = input.shift().split(" ").map(el => +el);
    let result = 0;

    for (let i = 0; i < input.length; i += 2) {
        result = input[i] ^ input[i + 1];
    }

    console.log(result);
}

oddTimes(['5 7 2 7 5 2 5']);