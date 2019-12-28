function nameGame(input) {
    let name = input.shift();
    let points = 0;
    let winner = "";

    while (name != "Stop") {
        let currentScore = 0;
        for (let i = 0; i < name.length; i++) {
            let number = Number(input.shift());
            
            let symbol = name[i];
            let charCode = symbol.charCodeAt(0);
            
            if (number == charCode) {
                currentScore += 10;
            } else {
                currentScore += 2;
            }
        }
        if (currentScore >= points){
            winner = name;
            points = currentScore;
        }
        name = input.shift(); 
    }
    console.log(`The winner is ${winner} with ${points} points!`);
}

nameGame(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"]);