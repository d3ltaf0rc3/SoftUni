function cutAndReverse(input) {
    let firstStr = input.substr(0, input.length / 2);
    let secondStr = input.substr(input.length / 2);
    firstStr = firstStr.split("").reverse().join("");
    secondStr = secondStr.split("").reverse().join("");
    console.log(firstStr);
    console.log(secondStr);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');