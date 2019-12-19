function sushiTime(input) {
    let sushiType = input.shift();
    let restaurant = input.shift();
    let portions = Number(input.shift());
    let delivery = input.shift();
    let price = 0;
    let isInvalid = false;

    switch (restaurant) {
        case "Sushi Zone":
            if (sushiType == "sashimi") {
                price = portions * 4.99;
            }
            else if (sushiType == "maki") {
                price = portions * 5.29;
            }
            else if (sushiType == "uramaki") {
                price = portions * 5.99;
            }
            else if (sushiType == "temaki") {
                price = portions * 4.29;
            }
            break;
        case "Sushi Time":
            if (sushiType == "sashimi") {
                price = portions * 5.49;
            }
            else if (sushiType == "maki") {
                price = portions * 4.69;
            }
            else if (sushiType == "uramaki") {
                price = portions * 4.49;
            }
            else if (sushiType == "temaki") {
                price = portions * 5.19;
            }
            break;
        case "Sushi Bar":
            if (sushiType == "sashimi") {
                price = portions * 5.25;
            }
            else if (sushiType == "maki") {
                price = portions * 5.55;
            }
            else if (sushiType == "uramaki") {
                price = portions * 6.25;
            }
            else if (sushiType == "temaki") {
                price = portions * 4.75;
            }
            break;
        case "Asian Pub":
            if (sushiType == "sashimi") {
                price = portions * 4.50;
            }
            else if (sushiType == "maki") {
                price = portions * 4.80;
            }
            else if (sushiType == "uramaki") {
                price = portions * 5.50;
            }
            else if (sushiType == "temaki") {
                price = portions * 5.50
            }
            break;
        default: console.log(`${restaurant} is invalid restaurant!`);
            isInvalid = true;
    }

    if (delivery == "Y" && isInvalid == false){
        let deliveryPrice = 1.2 * price;
        console.log(`Total price: ${Math.ceil(deliveryPrice)} lv.`)
    } else if (delivery == "N" && isInvalid == false){
        console.log(`Total price: ${Math.ceil(price)} lv.`)
    }
}

sushiTime(["sashimi", "SASA", "3", "N"]);