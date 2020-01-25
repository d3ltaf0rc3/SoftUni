function heroicInventory(input) {
    let register = [];

    input.forEach(element => {
        let data = element.split(" / ");
        let current = {};
        
        let name = data[0];
        let level = Number(data[1]);
        
        current.name = name;
        current.level = level;
        
        if (data.length > 2) {
            let items = data[2].split(", ");
            current.items = items;
        } else {
            current.items = [];
        }
        register.push(current);
    });

    console.log(JSON.stringify(register));
}

heroicInventory(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);