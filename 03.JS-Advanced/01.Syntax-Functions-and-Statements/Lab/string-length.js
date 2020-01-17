function stringLength(firstStr, secondStr, thirdStr) {
    let sum = firstStr.length + secondStr.length + thirdStr.length;
    let average = Math.floor(sum / 3);
    console.log(`${sum}\n${average}`);
}

stringLength('chocolate', 'ice cream', 'cake');