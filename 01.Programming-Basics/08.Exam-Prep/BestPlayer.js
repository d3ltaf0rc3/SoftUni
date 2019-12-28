function bestPlayer(input) {
    let player = input.shift();
    let goals = Number(input.shift());
    let maxGoals = Number.MIN_SAFE_INTEGER;
    let isHatTrick = false;
    let bestPlayer = "";

    while (player != "END") {
        if (goals > maxGoals) {
            maxGoals = goals;
            bestPlayer = player;
            if (goals >= 3 && goals < 10) {
                isHatTrick = true;
            } else if (goals >= 10) {
                isHatTrick = true;
                break;
            }
        }

        player = input.shift();
        goals = Number(input.shift());
    }
    console.log(`${bestPlayer} is the best player!`);
    if (isHatTrick == true) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}

bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);