function houseParty(strings) {
    let list = [];
    for (let i = 0; i < strings.length; i++) {
        let element = strings[i].split(" ");
        if (element.length === 3) {
            if (!list.includes(element[0])) {
                list.push(element[0]);
            } else {
                console.log(`${element[0]} is already in the list!`);
            }
        } else {
            if (list.includes(element[0])) {
                let index = list.indexOf(element[0]);
                list.splice(index, 1);
            } else {
                console.log(`${element[0]} is not in the list!`);
            }
        }
    }
    list.forEach(el => console.log(el));

}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);