function spiceMustFlow(startingYield) {
    let totalSpice = 0;
    let operationalDays = 0;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        totalSpice -= 26;
        startingYield -= 10;
        operationalDays++;
    }
    if (totalSpice >= 26) {
        totalSpice -= 26;
    }
    console.log(operationalDays);
    console.log(totalSpice);
}

spiceMustFlow(111);