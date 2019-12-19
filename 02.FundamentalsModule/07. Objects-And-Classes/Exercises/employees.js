function employees(strings) {
    for (let i = 0; i < strings.length; i++) {
        let person = {
            name:strings[i],
            personalNum:strings[i].length
        };
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);