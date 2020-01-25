function cappyJuice(input) {
    let juices = {};
    let bottles = {};

    input.forEach(element => {
        let [type, quantity] = element.split(" => ");

        if (juices.hasOwnProperty(type)) {
            juices[type] += Number(quantity);
        } else {
            juices[type] = Number(quantity);
        }

        if (juices[type] >= 1000) {
            let amount = Math.trunc(juices[type] / 1000);
            if (bottles.hasOwnProperty(type)) {
                bottles[type] += Number(amount);
            } else {
                bottles[type] = Number(amount);
            }
            juices[type] -= amount * 1000;
        }
    });
    for (const key in bottles) {
        let value = bottles[key];
        console.log(`${key} => ${value}`);
    }
}

cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

);