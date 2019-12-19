function CtoF(input){
    let celcius = Number(input.shift());

    let fahrenheit = 32 + celcius * 1.8;

    console.log(fahrenheit.toFixed(2));
}

CtoF([25]);