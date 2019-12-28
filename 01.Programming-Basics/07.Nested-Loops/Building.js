function building(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    for (let i = floors; i >= 1; i--) {
        let result = "";
        for (let j = 0; j < rooms; j++) {
            if (i == floors){
                result += "L";
            } else if (i % 2 == 0){
                result += "O";
            } else {
                result += "A";
            }
            result += i + "" + j;
            result += " ";   
        }
        console.log(result)
    }
}

building(["6","4"]);