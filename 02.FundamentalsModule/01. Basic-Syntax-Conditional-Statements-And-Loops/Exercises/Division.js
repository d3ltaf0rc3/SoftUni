function division(num) {
    let divNum = 0;
    if (num % 2 == 0) {
        divNum = 2;
    } if (num % 3 == 0) {
        divNum = 3;
    } if (num % 6 == 0) {
        divNum = 6;
    } if (num % 7 == 0) {
        divNum = 7;
    } if (num % 10 == 0) {
        divNum = 10;
    }

    if (divNum > 0) {
        console.log(`The number is divisible by ${divNum}`);
        
    } else {
        console.log("Not divisible");   
    }
}

division(30);