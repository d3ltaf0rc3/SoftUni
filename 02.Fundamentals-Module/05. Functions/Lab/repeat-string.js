function repeatString(string, count) {
    let newStr = "";
    for (let i = 1; i <= count;i++) {
        newStr += string;
    }
    return newStr;
}

repeatString();