function trainTheTrainers(input) {
    let judges = Number(input.shift());
    let command;
    let averageGrade = 0;
    let counter = 0;
    
    
    while (command != "Finish") {
        command = input.shift();
        let currentAvrg = 0;  
        if (command == "Finish") {
            averageGrade /= counter;
            console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`);
        } else {
            for (let i = 0; i < judges; i++) {
                let grade = Number(input.shift());
                currentAvrg += grade;
                averageGrade += grade;
                counter++;
            }
            currentAvrg /= judges;
            
            console.log(`${command} - ${currentAvrg.toFixed(2)}.`);
        }
        
    }
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);