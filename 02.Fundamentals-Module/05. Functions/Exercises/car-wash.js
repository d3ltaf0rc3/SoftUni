function carWash(commands) {
    let cleaned = 0;
    while (commands.length > 0) {
        let command = commands.shift();
        if (command === "soap") {
            cleaned += 10;
        } else if (command === "water") {
            cleaned += 0.2 * cleaned;
        } else if (command === "vacuum cleaner") {
            cleaned += 0.25 * cleaned;
        } else if (command === "mud") {
            cleaned -= 0.1 * cleaned;
        } 
    }
    console.log(`The car is ${cleaned.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);