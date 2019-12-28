function GreaterNumber(input){
    let numA = Number(input.shift());
    let numB = Number(input.shift());

    if (numA > numB){
        console.log(numA);
    }
    else{
        console.log(numB);
    }
}

GreaterNumber(["5", "3"]);