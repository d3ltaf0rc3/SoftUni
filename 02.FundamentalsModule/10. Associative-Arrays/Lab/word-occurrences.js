function wordOccurrences(input) {
    let words = {};

    input.forEach(element => {
        if (words.hasOwnProperty(element)) {
            words[element] += 1;
        } else {
            words[element] = 1;
        }
    });
    let sorted = Array.from(Object.entries(words)).sort((a, b) => b[1] - a[1]);
    for (const iterator of sorted) {
        console.log(`${iterator[0]} -> ${iterator[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here",
    "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);