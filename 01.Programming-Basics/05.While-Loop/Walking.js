function walking(input) {
    let sum = 0;

    while (sum < 10000) {
        let steps = input.shift();

        if (steps === "Going home") {
            steps = Number(input.shift());
            sum += Number(steps);
            break;
        } else {
            sum += Number(steps);
        }
    }

    if (sum >= 10000) {
        console.log("Goal reached! Good job!")
    } else {
        let difference = 10000 - sum;
        console.log(`${difference} more steps to reach goal.`);
    }
}

walking(["1500", "300", "2500", "3000", "Going home", "300"]);