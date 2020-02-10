function cityMarkets(input) {
    let markets = {};

    input.forEach(element => {
        let [town, product, qtyToPrice] = element.split(" -> ");
        let [qty, pricePerUnit] = qtyToPrice.split(" : ");
        let totalPrice = qty * pricePerUnit;

        if (markets.hasOwnProperty(town)) {
            markets[town][product] = totalPrice;
        } else {
            markets[town] = {};
            markets[town][product] = totalPrice;
        }
    });
    for (const town in markets) {
        console.log(`Town - ${town}`);
        for (const product in markets[town]) {
            console.log(`$$$${product} : ${markets[town][product]}`);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);