function coding(input) {
    let stringNumber = input[0];

    for (let i = stringNumber.length - 1; i >= 0; i--) {
        let currentDigitToNum = Number(stringNumber[i]);
        if (currentDigitToNum == 0) {
            console.log("ZERO");
            continue;
        }
        let printLine = "";
        for (let n = 1; n <= currentDigitToNum; n++) {
            printLine += String.fromCharCode(currentDigitToNum + 33);
        }
        console.log(printLine)
    }
}

coding(["2049"]);