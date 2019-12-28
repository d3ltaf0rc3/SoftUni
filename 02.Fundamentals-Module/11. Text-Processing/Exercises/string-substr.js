function stringSubstr(word, string) {
    let str = string.split(" ");
    let isFound = false;
    str.forEach(element => {
        if (word.toLowerCase() === element.toLowerCase()) {
            console.log(word);
            isFound = true;
        }
    });
    if (isFound === false) {
        console.log(`${word} not found!`);
    }
}

stringSubstr('javascript',
    'JavaScript is the best programming language');