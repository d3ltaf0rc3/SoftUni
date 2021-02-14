function graduation(input) {
    let name = input.shift();
    let counter = 1;
    let total = 0;

    while (counter <= 12) {
        let grade = Number(input.shift());
        
        if (grade >= 4.00) {
            total += grade;
            counter++;
        }
    }
    total /= 12;
    console.log(`${name} graduated. Average grade: ${total.toFixed(2)}`);
}

graduation();