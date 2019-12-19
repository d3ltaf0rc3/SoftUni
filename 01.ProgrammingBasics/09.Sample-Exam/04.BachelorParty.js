function bachelorParty(input) {
    let singerPrice = Number(input.shift());
    let command = "";
    let guests = 0;
    let profit = 0;
    

    while (command != "The restaurant is full") {
        let currentPrice = 0;
        command = input.shift();
        if (command !== "The restaurant is full") {
            command = Number(command);
            guests += command;
            if (command < 5) {
                currentPrice = command * 100;
            } else if (command >= 5) {
                currentPrice = command * 70;
            }
            profit += currentPrice;
        }
    }

    if (profit < singerPrice){
        console.log(`You have ${guests} guests and ${profit} leva income, but no singer.`);
    } else {
        let diff = profit - singerPrice;
        console.log(`You have ${guests} guests and ${diff} leva left.`);
    }
}

bachelorParty(["3200", "5", "12", "6", "6", "12", "The restaurant is full"]);