function train(arr) {
    let wagons = arr.shift().split(" ");
    let wagonMax = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");
        if (command[0] === "Add") {
            wagons.push(command[1]);
        } else {
            for (let i = 0; i < wagons.length; i++) {
                let availableSpace = wagonMax - wagons[i];
                if (command[0] <= availableSpace) {
                    wagons[i] = Number(command[0]) + Number(wagons[i]);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);