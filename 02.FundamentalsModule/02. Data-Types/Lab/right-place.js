function rightPlace(firstStr, char, secondStr) {
    firstStr = firstStr.replace("_", char)
    let result = firstStr === secondStr ? "Matched":"Not Matched";
    console.log(result);
}

rightPlace('Str_ng', "i", "String");