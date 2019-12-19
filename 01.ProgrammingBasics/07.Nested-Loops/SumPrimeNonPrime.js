function sumPrimeNonPrime(input) {
    let number = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (number != "stop") {
        let num = Number(number);
        let isPrime = true;
        
        if (num < 0) {
            console.log("Number is negative.");
        } else {
            if (num === 1) {
                isPrime = false;
            } else {
                for (let x = 2; x <= Math.sqrt(num); x++) {
                    if (num % x === 0) {
                        isPrime = false;
                    }
                }
            }
            
            if (isPrime == true) {
                primeSum += num;
            } else {
                nonPrimeSum += num;
            }
        }

        number = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);