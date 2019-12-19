function bitcoinMining(input) {
    const bitcoinPrice = 11949.16;
    const goldGramPrice = 67.51;
    let goldPerDay = input.shift();
    let bitcoin = 0;
    let currentDay = 1;
    let totalMoney = 0;
    let firstPurchase = 0;
    let isBitcoinBought = false;

    while (goldPerDay > 0) {
        let dayMoney = goldPerDay * goldGramPrice;

        if (currentDay % 3 == 0) {
            dayMoney *= 0.7;
            totalMoney += dayMoney;
        } else {
            totalMoney += dayMoney
        }

        while (totalMoney >= bitcoinPrice) {
            totalMoney -= bitcoinPrice;
            bitcoin++;
        }

        if (isBitcoinBought == false){
            if (bitcoin > 0){
                firstPurchase = currentDay;
                isBitcoinBought = true;
            }
        }

        goldPerDay = input.shift();
        currentDay++;
    }


    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin > 0){
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100,200,300]);