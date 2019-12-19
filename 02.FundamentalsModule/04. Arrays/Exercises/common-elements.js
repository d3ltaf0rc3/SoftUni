function commonElements(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        const el = firstArr[i];
        if (secondArr.includes(el)) {
            console.log(el);
        } else {
            continue;
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);