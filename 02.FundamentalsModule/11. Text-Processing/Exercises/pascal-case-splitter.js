function pascalCaseSplitter(str) {
    const charactersInfo = str
        .split('')
        .map((char, index) => { return { index, isUpper: char === char.toUpperCase() }; });

    const output = charactersInfo
        .filter((o) => o.isUpper)
        .map((o, i, a) => {
            const firstLetter = str[o.index];
            const otherLetters = str.slice(o.index + 1, a[i + 1] ? a[i + 1].index : str.length);
            return firstLetter.concat(otherLetters);
        }).join(', ');

    console.log(output);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');