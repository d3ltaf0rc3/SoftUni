function storeProvision(currentStock, orderedProducts) {
    const obj = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        let [product, quantity] = [currentStock[i], Number(currentStock[i + 1])];
        obj[product] = quantity;
    }
    for (let j = 0; j < orderedProducts.length; j += 2) {
        let [product, quantity] = [orderedProducts[j], Number(orderedProducts[j+1])];
        if (obj.hasOwnProperty(product)) {
            obj[product] += quantity;
        } else {
            obj[product] = quantity;
        }
    }
    
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);