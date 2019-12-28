function newHouse(input) {
    let flower = input.shift();
    let amount = Number(input.shift());
    let budget = Number(input.shift());
    let price = 0;
    let difference = 0;


    if (flower == "Roses") {
        price = amount * 5;
        if (amount > 80) {
            price *= 0.9;
        }
    }
    else if (flower == "Dahlias") {
        price = amount * 3.8;
        if (amount > 90) {
            price *= 0.85;
        }
    }
    else if (flower == "Tulips") {
        price = amount * 2.8;
        if (amount > 80) {
            price *= 0.85;
        }
    }
    else if (flower == "Narcissus") {
        price = amount * 3;
        if (amount < 120) {
            price *= 1.15;
        }
    }
    else if (flower == "Gladiolus") {
        price = amount * 2.5;
        if (amount < 80) {
            price *= 1.2;
        }
    }

    difference = budget - price;
    
    if (difference >= 0){
        difference = Math.abs(difference);
        console.log(`Hey, you have a great garden with ${amount} ${flower} and ${difference.toFixed(2)} leva left.`);
    }
    else {
        difference = Math.abs(difference);
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`)
    }

}

newHouse(["Roses", 55, 250]);