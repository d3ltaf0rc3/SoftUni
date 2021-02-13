function cToF(input) {
    let celsius = Number(input.shift());

    let fahrenheit = 32 + celsius * 1.8;

    console.log(fahrenheit.toFixed(2));
}

cToF([25]);
