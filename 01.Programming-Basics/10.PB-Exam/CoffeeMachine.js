function coffeeMachine(input) {
    let drink = input.shift();
    let sugar = input.shift();
    let quantity = Number(input.shift());
    let price = 0;

    switch (drink) {
        case "Espresso":
            if (sugar == "Without") {
                price = quantity * 0.9;
            } else if (sugar == "Normal") {
                price = quantity;
            } else if (sugar == "Extra") {
                price = quantity * 1.2;
            }
            break;
        case "Cappuccino":
            if (sugar == "Without") {
                price = quantity;
            } else if (sugar == "Normal") {
                price = quantity * 1.2;
            } else if (sugar == "Extra") {
                price = quantity * 1.6;
            }
            break;
        case "Tea":
            if (sugar == "Without") {
                price = quantity * 0.5;
            } else if (sugar == "Normal") {
                price = quantity * 0.6;
            } else if (sugar == "Extra") {
                price = quantity * 0.7;
            }
            break;
    }

    if (sugar == "Without"){
        price *= 0.65;
    }
    if (drink == "Espresso" && quantity >= 5){
        price *= 0.75;
    }
    if (price > 15){
        price *= 0.8;
    }

    console.log(`You bought ${quantity} cups of ${drink} for ${price.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso", "Without", "10"]);