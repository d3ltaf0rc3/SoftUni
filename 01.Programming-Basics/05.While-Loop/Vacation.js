function vacation(input) {
    let neededMoney = Number(input.shift());
    let ownedMoney = Number(input.shift());
    let spendCounter = 0;
    let dayCounter = 0;

    while (neededMoney > ownedMoney && spendCounter < 5) {
        let action = input.shift();
        let amount = Number(input.shift());

        if (action === "spend") {
            spendCounter++;
            ownedMoney -= amount;

            if (ownedMoney < 0) {
                ownedMoney = 0;
            }
        } else if (action === "save") {
            ownedMoney += amount;
            spendCounter = 0;
        }
        dayCounter++;
    }

    if (spendCounter === 5) {
        console.log(`You can't save the money.\n${dayCounter}`);
    } else if (neededMoney <= ownedMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}

vacation([250, 150, "spend", 50, "spend", 50, "save", 100, "save", 100]);