function softuniBarIncome(input) {
    let token = input.shift();
    let name = /%[A-Z][a-z]*%/;
    let product = /<\w+>/;
    let count = /\|\d\|/;
    let price = /\d+[\.\d]*\$/;
    let totalIncome = 0

    while (token !== "end of shift") {
        if (name.test(token) && product.test(token) && count.test(token) && price.test(token)) {
            let customerName = token.match(/(?<=%)\w+(?=%)/);
            let product = token.match(/(?<=<)\w+(?=>)/);
            let quantity = token.match(/(?<=\|)\d(?=\|)/);
            let price = token.match(/\d+[\.\d]*(?=\$)/);
            let totalPrice = quantity[0] * price[0];
            totalIncome += +totalPrice.toFixed(2);
            console.log(`${customerName[0]}: ${product[0]} - ${totalPrice.toFixed(2)}`);
        }
        token = input.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);