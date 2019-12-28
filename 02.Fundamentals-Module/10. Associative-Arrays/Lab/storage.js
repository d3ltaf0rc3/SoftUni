function storage(input) {
    let products = new Map();
    input.forEach(element => {
        let [product, quantity] = element.split(" ");
        if (products.has(product)) {
            let oldQuantity = products.get(product);
            products.set(product, +quantity + oldQuantity);
        } else {
            products.set(product, +quantity);
        }
    });
    for (const iterator of products) {
        console.log(`${iterator[0]} -> ${iterator[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);