function extractSubsqnce(arr) {
    let subsqnce = [];
    subsqnce[0] = Number(arr.shift());
    arr.forEach(element => {
        if (element >= subsqnce[subsqnce.length - 1]) {
            subsqnce.push(+element);
        }
    });
    console.log(subsqnce.join("\n"));
}

extractSubsqnce([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);