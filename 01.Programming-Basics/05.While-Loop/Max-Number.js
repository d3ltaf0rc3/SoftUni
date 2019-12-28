function maxNumber (input) {
    let n = Number(input.shift());
    let counter = 1;
    let max = Number.MIN_SAFE_INTEGER;
    let num = 0;

    while (counter <= n){
        num = Number(input.shift());
        if (num > max){
            max = num;
        }
        counter++;
    }
    console.log(max)
}

maxNumber([3,-10,20,-30]);