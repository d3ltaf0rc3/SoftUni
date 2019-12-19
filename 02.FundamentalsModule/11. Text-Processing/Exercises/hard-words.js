function hardWords(input) {
    let letter = input[0];

    while (letter.includes("_")) {
        let match = letter.match(/["_"]+/);
        let word;
        input[1].forEach(element => {
            if (element.length === match[0].length) {
                word = element;
            }
        });
        letter = letter.replace(match[0], word);
    }
    console.log(letter);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);