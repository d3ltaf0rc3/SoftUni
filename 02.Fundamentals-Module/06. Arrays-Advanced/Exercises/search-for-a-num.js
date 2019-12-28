function searchForANum(ints, commands) {
    let elements = commands[0];
    let deleted = commands[1];
    let searchNum = commands[2];
    let counter = 0;

    let spliced = ints.splice(0, elements);
    spliced.splice(0, deleted);
    spliced.forEach(element => {
        if (element === searchNum) {
            counter++;
        }
    });
    
    console.log(`Number ${searchNum} occurs ${counter} times.`);
}

searchForANum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );