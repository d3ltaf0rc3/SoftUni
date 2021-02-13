function toyShop(input) {
    let excursionPrice = Number(input.shift());
    let puzzles = Number(input.shift());
    let dolls = Number(input.shift());
    let bears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());

    let sum = puzzles + dolls + bears + minions + trucks;
    let price = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    if (sum >= 50) {
        let discount = price - price / 4;
        let profit = discount - discount / 10;

        if (profit >= excursionPrice) {
            let diff = profit - excursionPrice;
            console.log(`Yes! ${diff.toFixed(2)} lv left.`)
        } else {
            let diff = excursionPrice - profit;
            console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
        }
    } else {
        let profit = price - price / 10;

        if (profit >= excursionPrice) {
            let diff = profit - excursionPrice;
            console.log(`Yes! ${diff.toFixed(2)} lv left.`)
        } else {
            let diff = excursionPrice - profit;
            console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
        }
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);