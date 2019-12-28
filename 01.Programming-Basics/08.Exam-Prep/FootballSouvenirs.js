function footballSouvenirs(input) {
    let team = input.shift();
    let souvenir = input.shift();
    let boughtSouvenirs = Number(input.shift());
    let price = 0;
    let isStockInvalid = false;
    let isCountryInvalid = false;

    switch (team) {
        case "Argentina":
            switch (souvenir) {
                case "flags":
                    price = boughtSouvenirs * 3.25;
                    break;
                case "caps":
                    price = boughtSouvenirs * 7.20;
                    break;
                case "posters":
                    price = boughtSouvenirs * 5.10;
                    break;
                case "stickers":
                    price = boughtSouvenirs * 1.25;
                    break;
                default: console.log(`Invalid stock!`);
                    isStockInvalid = true;

            }
            break;
        case "Brazil":
            switch (souvenir) {
                case "flags":
                    price = boughtSouvenirs * 4.20;
                    break;
                case "caps":
                    price = boughtSouvenirs * 8.50;
                    break;
                case "posters":
                    price = boughtSouvenirs * 5.35;
                    break;
                case "stickers":
                    price = boughtSouvenirs * 1.20;
                    break;
                default: console.log(`Invalid stock!`);
                    isStockInvalid = true;

            }
            break;
        case "Croatia":
            switch (souvenir) {
                case "flags":
                    price = boughtSouvenirs * 2.75;
                    break;
                case "caps":
                    price = boughtSouvenirs * 6.90;
                    break;
                case "posters":
                    price = boughtSouvenirs * 4.95;
                    ; break;
                case "stickers":
                    price = boughtSouvenirs * 1.10;
                    break;
                default: console.log(`Invalid stock!`);
                    isStockInvalid = true;

            }
            break;
        case "Denmark":
            switch (souvenir) {
                case "flags":
                    price = boughtSouvenirs * 3.10;
                    break;
                case "caps":
                    price = boughtSouvenirs * 6.50;
                    break;
                case "posters":
                    price = boughtSouvenirs * 4.80;
                    break;
                case "stickers":
                    price = boughtSouvenirs * 0.9;
                    break;
                default: console.log(`Invalid stock!`);
                    isStockInvalid = true;

            }
            break;
        default: console.log("Invalid country!");
            isCountryInvalid = true;
    }

    if (isCountryInvalid == false && isStockInvalid == false){
        console.log(`Pepi bought ${boughtSouvenirs} ${souvenir} of ${team} for ${price.toFixed(2)} lv.`);
    }
}

footballSouvenirs(["Croatia", "flags", "13"]);