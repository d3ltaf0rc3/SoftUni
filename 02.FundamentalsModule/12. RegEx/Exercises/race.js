function race(input) {
    let contestants = {};
    let names = input.shift().split(", ").forEach(element => contestants[element] = 0);
    let token = input.shift();
    let nameRegEx = /[A-Za-z]+/g;
    let distanceRegEx = /[0-9]/g;

    while (token !== "end of race") {
        let currentSum = 0;
        let name = token.match(nameRegEx).join("");
        token.match(distanceRegEx).forEach(element => currentSum += +element);

        if (contestants.hasOwnProperty(name)) {
            contestants[name] += currentSum;
        }

        token = input.shift();
    }
    let sorted = Array.from(Object.entries(contestants)).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);