function furniture(input) {
    let regExp = />>[A-Za-z\s]+<<\d+[\.\d]*!\d+/;
    let totalPrice = 0;
    let bought = [];

    for (const value of input) {
        if (value === "Purchase") {
            break;
        }

        if (regExp.test(value)) {
            let match = /(?<=>>)\w+(?=<<)/.exec(value);
            bought.push(match[0]);
            let price = /(?<=<<)\d+\.*\d*(?=!)/.exec(value);
            let quantity = /(?<=!)\d+/.exec(value);
            let total = price[0] * quantity[0];
            totalPrice += total;
        }
    }
    console.log("Bought furniture:");
    bought.forEach(element => {
        console.log(element);
    });
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);