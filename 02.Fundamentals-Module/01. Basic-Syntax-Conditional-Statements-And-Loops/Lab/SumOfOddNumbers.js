function sum(num) {
    let oddCounter = 1;
    let counter = 1;
    let numSum = 0;

    while(oddCounter <= num){
        if (counter % 2 == 1){
            console.log(counter);
            numSum += counter
            oddCounter++;
        }
        counter++;
    }
    console.log(`Sum: ${numSum}`);
}

sum(5);