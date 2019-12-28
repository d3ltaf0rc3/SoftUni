function graduation2(input) {
    let name = input.shift();
    let grades = 1;
    let total = 0;
    let failed = 0;
    let isFailed = false;

    while (grades <= 12) {
        let currentGrade = Number(input.shift());
        if (currentGrade < 4.00) {
            failed++;
        }
        else {
            total += currentGrade;
            grades++;
        }
        if (failed > 1) {
            isFailed = true;
            break;
        }
    }
    if (isFailed == true) {
        console.log(`${name} has been excluded at ${grades} grade`);
    }
    else {
        total = total / 12;
        console.log(`${name} graduated. Average grade: ${total.toFixed(2)}`);
    }
}

graduation2(["Gosho", 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5]);