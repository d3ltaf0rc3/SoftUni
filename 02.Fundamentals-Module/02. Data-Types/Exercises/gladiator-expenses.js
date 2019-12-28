function gladiatorExpenses(lostFights, helmetPr, swordPr, shieldPr, armorPr) {
    let totalPrice = 0;
    let shieldCounter = 0;
    let isEven = false;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            totalPrice += helmetPr;
        }
        if (i % 3 === 0) {
            totalPrice += swordPr;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            totalPrice += shieldPr;
            shieldCounter++;
            isEven = true;
        }
        if (shieldCounter > 0 && shieldCounter % 2 === 0 && isEven === true) {
            totalPrice += armorPr;
            isEven = false;
        }  
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);