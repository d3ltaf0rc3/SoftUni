function equalWords(input) {
    let wordA = input.shift().toLowerCase();
    let wordB = input.shift().toLowerCase();

    if (wordA == wordB) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

equalWords(["softuni", "SoftUni"]);
equalWords(["not", "equal"]);