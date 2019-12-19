function printElement(stringArr) {
    let step = Number(stringArr.pop());
    let elements = "";

    for (let i = 0; i < stringArr.length; i += step) {
        elements += stringArr[i] + " ";
    }

    console.log(elements);
}

printElement(['5', '20', '31', '4', '20', '2']);