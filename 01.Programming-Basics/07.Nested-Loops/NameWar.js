function nameWar(input) {
    let currentIndex = 0;
    let name = input[currentIndex];
    let winnerName = "";
    let winnerScore = 0;
    
    while (name != "STOP") {
        let tempScore = 0;
        for (let i = 0; i < name.length; i++) {
            tempScore += name.charCodeAt(i);
        }
        if (winnerScore < tempScore){
            winnerScore = tempScore;
            winnerName = name;
        }
        currentIndex++;
        name = input[currentIndex];
    }
    console.log(`Winner is ${winnerName} - ${winnerScore}!`);
}

nameWar();