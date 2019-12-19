function printCharacters(charOne, charTwo) {
    let allChars = "";
    let charOneToAscii = charOne.charCodeAt(0);
    let charTwoToAscii = charTwo.charCodeAt(0);
    function printCharsBetween(smallerCharCode, biggerCharCode) {
        for (let i = smallerCharCode + 1; i < biggerCharCode; i++) {
            let currentSymbol = String.fromCharCode(i);
            allChars += currentSymbol + " ";
        }
        console.log(allChars);
    }
    if (charOneToAscii < charTwoToAscii) {
        printCharsBetween(charOneToAscii, charTwoToAscii);
    } else {
        printCharsBetween(charTwoToAscii, charOneToAscii);
    }
}

printCharacters('C',
'#'
);