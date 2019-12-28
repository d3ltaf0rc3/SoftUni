function lowerOrUpper(char) {
    let charToCode = char.charCodeAt(0);

    if (charToCode >= 65 && charToCode <= 90) {
        console.log("upper-case");
    } else if (charToCode >= 97 && charToCode <= 122){
        console.log("lower-case");
    }
}

lowerOrUpper("Z");