function replaceRepeatingChars(string) {
    let newStr = "";
    let old;

    for (const iterator of string) {
        if (old !== iterator) {
            newStr += iterator;
        }
        old = iterator;
    }
    console.log(newStr);
}

replaceRepeatingChars('qqqwerqwecccwd');