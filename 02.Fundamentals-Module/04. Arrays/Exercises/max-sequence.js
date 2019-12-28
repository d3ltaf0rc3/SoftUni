function solve(arr) {
    let finalSequence = [];
    let currentSequence = [];

    const newArray = arr.filter(function (value) {
        return !Number.isNaN(value);
    });

    for (let i = 0; i <= newArray.length; i++) {
        if (i === 0 || currentSequence.includes(newArray[i])) {
            currentSequence.push(newArray[i]);
        } else {
            if (currentSequence.length > finalSequence.length) {
                finalSequence = currentSequence;
            }
            currentSequence = [];
            currentSequence.push(newArray[i]);
        }
    }

    console.log(finalSequence.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);