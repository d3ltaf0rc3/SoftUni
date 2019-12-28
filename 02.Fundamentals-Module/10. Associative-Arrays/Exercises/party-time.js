function partyTime(input) {
    let guests = { "VIP": [], "regular": [] };
    let guest = input.shift();
    while (guest !== "PARTY") {
        if (!isNaN(guest[0])) {
            guests.VIP.push(guest);
        } else {
            guests.regular.push(guest);
        }
        guest = input.shift();
    }

    input.forEach(element => {
        if (Object.values(guests.regular).indexOf(element) > -1) {
            let i = guests.regular.indexOf(element);
            guests.regular.splice(i, 1);
        } else if (Object.values(guests.VIP).indexOf(element) > -1) {
            let i = guests.VIP.indexOf(element);
            guests.VIP.splice(i, 1);
        }
    });
    let count = guests.VIP.length + guests.regular.length;
    console.log(count);
    for (const key in guests) {
        let arr = guests[key];
        arr.forEach(el => console.log(el));
    }
}

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']);