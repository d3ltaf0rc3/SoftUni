function gladiatorInventory(input) {
    let equipment = input.shift().split(" ");
    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(" ");
        if (token[0] === "Buy") {
            if (!equipment.includes(token[1])) {
                equipment.push(token[1]);
            }
        } else if (token[0] === "Trash") {
            if (equipment.includes(token[1])) {
                let index = equipment.indexOf(token[1]);
                equipment.splice(index, 1);
            }
        } else if (token[0] === "Repair") {
            if (equipment.includes(token[1])) {
                let index = equipment.indexOf(token[1]);
                equipment.splice(index, 1);
                equipment.push(token[1]);
            }
        } else if (token[0] === "Upgrade") {
            let upgrade = token[1].split("-");
            if (equipment.includes(upgrade[0])) {
                let index = equipment.indexOf(upgrade[0]);
                equipment.splice(index + 1, 0, `${upgrade[0]}:${upgrade[1]}`);
            }
        }
    }
    console.log(equipment.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);