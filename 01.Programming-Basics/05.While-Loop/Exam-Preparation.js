function examPrep(input) {
    let failed = Number(input.shift());
    let counterForBadGrades = 0;
    let sum = 0;
    let counterForGrades = 0;
    let lastProblem = null;
    let isEnough = false;

    while (counterForBadGrades < failed) {
        let exercise = input.shift();
        let grade = Number(input.shift());

        if (exercise === "Enough") {
            isEnough = true;
            break;
        } else if (grade <= 4.00) {
            counterForBadGrades++;
        }

        counterForGrades++;
        lastProblem = exercise;
        sum += grade;
    }
    if (isEnough === true) {
        let average = sum / counterForGrades;
        
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${counterForGrades}`);
        console.log(`Last problem: ${lastProblem}`);
    } else {
        console.log(`You need a break, ${counterForBadGrades} poor grades.`);
    }
}

examPrep([2, "Income", 3, "Game Info", 6, "Best Player", 4]);