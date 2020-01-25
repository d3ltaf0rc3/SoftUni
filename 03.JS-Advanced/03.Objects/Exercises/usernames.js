function usernames(input) {
    let names = [];
    input.forEach(element => {
        if (!names.includes(element)) {
            names.push(element);
        }
    });
    names.sort((a,b) => a.length - b.length || a.localeCompare(b));
    for (const value of names) {
        console.log(value);
    }
}

usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);