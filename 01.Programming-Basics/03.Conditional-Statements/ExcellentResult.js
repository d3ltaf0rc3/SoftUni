function excellentResult(input) {
    let mark = Number(input.shift());

    if (mark >= 5.5) {
        console.log("Excellent!");
    }
}

excellentResult(["5.5"]);