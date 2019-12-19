function ExcellentResult (input){
    let mark = Number(input.shift());

    if (mark >= 5.5){
        console.log("Excellent!");
    }
}

ExcellentResult(["5.5"]);