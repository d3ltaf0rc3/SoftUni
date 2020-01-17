function wordsUppercase(sentence) {
    let arr = [];
    let regexp = /\w+/g;
    let match = sentence.match(regexp);
    match.forEach(element => {
        arr.push(element.toUpperCase());
    });
    console.log(arr.join(", "));
}

wordsUppercase('Hi, how are you?');