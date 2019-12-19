function wordsTracker(input) {
    let words = input.shift().split(" ");
    let count = {};

    words.forEach(element => {
        count[element] = [];
    });
    input.forEach(element => {
        if (words.includes(element)) {
            count[element].push(element);
        }
    });
    let sorted = Array.from(Object.entries(count))
        .sort((a,b) => b[1].length - a[1].length)
        .forEach(element => {
        console.log(`${element[0]} - ${element[1].length}`);
    });
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);