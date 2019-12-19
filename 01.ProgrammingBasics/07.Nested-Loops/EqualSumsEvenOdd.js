function equalSums(input) {
    let num1 = Number(input.shift());   //100,000
    let num2 = Number(input.shift());   //100,050
    let result = "";
    let evenSum = 0;
    let oddSum = 0;

    for (let number = num1; number <= num2; number++) {
        let numString = number.toString();
        for (let i = 0; i < numString.length; i++) {
            let symbol = numString[i];
            if(i % 2 == 0){
                evenSum += Number(symbol);
            } else {
                oddSum += Number(symbol);
            }
            
        }
        if (evenSum == oddSum){
            result += numString + " ";    
        }
        evenSum = 0;
        oddSum = 0;
    }
    console.log(result);   
}

equalSums(["100000", "100050"]);