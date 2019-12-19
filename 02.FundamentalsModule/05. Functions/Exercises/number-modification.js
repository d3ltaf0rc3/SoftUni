function numModification(num) {
    num = String(num);
    let average = 0;
    let counter = 0;
    while (average < 5) {
        if (counter > 0) {
            num += "9";
        }
        average = 0;
        for (let i = 0; i < num.length; i++) {
            average += Number(num[i]);
        }
        average /= num.length;
        counter++;
    }
    console.log(num);
}

numModification(5835);