function sorting(arr) {
    let sorted = [];
    let arrLength = arr.length;
    arr.sort((a, b) => a - b);
    let smallest = arr.splice(0, arr.length / 2);
    let biggest = arr.reverse();
    for (let i = 1; i <= arrLength; i++) {
        if (i % 2 === 0) {
            sorted.push(smallest.shift());
        } else {
            sorted.push(biggest.shift());
        }
    }
    console.log(sorted.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);