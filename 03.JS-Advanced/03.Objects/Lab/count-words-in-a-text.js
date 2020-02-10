function countWords(input) {
    let words = {};
    let regExp = /\w+/g;
    let matches = input[0].match(regExp);
    matches.forEach(element => {
        if (words.hasOwnProperty(element)) {
            words[element] += 1;
        } else {
            words[element] = 1;
        }
    });
    console.log(JSON.stringify(words));
}

countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);