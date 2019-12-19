function arrayManipulator(ints, commands) {
    while (true) {
        let command = commands.shift().split(" ");

        if (command[0] === "add") {
            let index = Number(command[1]);
            let element = Number(command[2]);

            ints.splice(index, 0, element);
        } else if (command[0] === "addMany") {
            let index = Number(command[1]);
            let length = command.length - 1;

            for (let i = length; i >= 2; i--) {
                ints.splice(index, 0, Number(command[i]));
            }
        } else if (command[0] === "contains") {
            console.log(ints.indexOf(Number(command[1])));
        } else if (command[0] === "remove") {
            let index = Number(command[1]);

            ints.splice(index, 1);
        } else if (command[0] === "shift") {
            let positions = Number(command[1]);

            for (let i = 1; i <= positions; i++) {
                let element = ints.shift();
                ints.push(element);
            }
        } else if (command[0] === "sumPairs") {
            for (let i = 0; i < ints.length; i++) {
                if (!(ints[i + 1] === undefined)) {
                    ints.splice(i, 2, Number(ints[i]) + Number(ints[i + 1]));
                }
            }
        } else if (command[0] === "print") {
            break;
        }
    }
    console.log(`[ ${ints.join(", ")} ]`);
}

arrayManipulator(
    [2, 2, 4, 2, 4, 2],
    ["add 1 4", "sumPairs", "print"]);