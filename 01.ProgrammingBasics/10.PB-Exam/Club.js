function club (input) {
    let wantedProfit = Number(input.shift());
    let coctail = input.shift();
    let quantity = Number(input.shift());
    let profit = 0;

    while (coctail != "Party!" && profit < wantedProfit){
        let coctailPrice = quantity * coctail.length;
        if (coctailPrice % 2 != 0){
            coctailPrice *= 0.75;
        }
        profit += coctailPrice;
        coctail = input.shift();
        quantity = Number(input.shift());
    }
    let diff = Math.abs(wantedProfit - profit);
    if (coctail == "Party!"){
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }
    else if (profit >= wantedProfit){
        console.log("Target acquired.");
    }
    console.log(`Club income - ${profit.toFixed(2)} leva.`);
}

club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"
    ]);