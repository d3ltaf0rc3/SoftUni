function fanShop(input) {
    let budget = Number(input.shift());
    let n = Number(input.shift());
    let price = 0;

    for (let i = 0; i < n; i++) {
        let object = input.shift();
        switch (object) {
            case "hoodie":
                price += 30;
                break;
            case "keychain":
                price += 4;
                break;
            case "T-shirt":
                price += 20;
                break;
            case "flag":
                price += 15;
                break;
            case "sticker":
                price += 1;
                break;
        }
    }
    
    let diff = Math.abs(budget - price);
    
    if (price <= budget){
        console.log(`You bought ${n} items and left with ${diff} lv.`);
    } else {
        console.log(`Not enough money, you need ${diff} more lv.`);
    }
}

fanShop(["25", "3", "flag", "keychain", "sticker"]);