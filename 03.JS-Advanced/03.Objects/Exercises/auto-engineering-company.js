function autoCompany(input) {
    let register = {};
    input.forEach(element => {
        let [brand, model, quantity] = element.split(" | ");
        quantity = Number(quantity);
        if (register.hasOwnProperty(brand)) {
            if (register[brand].hasOwnProperty(model)) {
                register[brand][model] += quantity;
            } else {
                register[brand][model] = quantity;
            }
        } else {
            register[brand] = {};
            register[brand][model] = quantity;
        }
    });
    for (const key in register) {
        console.log(`${key}`);
        for (const property in register[key]) {
            console.log(`###${property} -> ${register[key][property]}`);
        }
    }
}

autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);