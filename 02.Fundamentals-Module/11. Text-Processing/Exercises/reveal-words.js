function revealWords(templates, sentence) {
    let words = templates.split(", ");

    words.forEach(element => {
        sentence = sentence.replace("*".repeat(element.length), element);
    });
    console.log(sentence);
}

revealWords('learning, great',
    'softuni is ***** place for ******** new programming languages');