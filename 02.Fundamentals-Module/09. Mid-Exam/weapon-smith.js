function weaponSmith(input) {
    function arrayMove(fromIndex, toIndex) {
        let element = weaponName[fromIndex];
        weaponName.splice(fromIndex, 1);
        weaponName.splice(toIndex, 0, element);
    }

    let weaponName = input
        .shift()
        .split("|");

    while (input.length > 0) {
        let token = input.shift().split(" ");
        let command = token.shift();

        if (command === "Done") {
            console.log(`You crafted ${weaponName.join("")}!`);
            break;
        } else if (command === "Move") {
            let index = Number(token[1]);
            if (weaponName[index] !== undefined) {
                if (token[0] === "Left" && index - 1 >= 0) {
                    arrayMove(index, index - 1);
                } else if (token[0] === "Right" && index + 1 < weaponName.length) {
                    arrayMove(index, index + 1);
                }
            }
        } else if (command === "Check") {
            if (token[0] === "Even") {
                console.log(weaponName.filter((el, i) => i % 2 === 0).join(" "));
            } else if (token[0] === "Odd") {
                console.log(weaponName.filter((el, i) => i % 2 === 1).join(" "));
            }
        }
    }
}

weaponSmith(['ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done']);