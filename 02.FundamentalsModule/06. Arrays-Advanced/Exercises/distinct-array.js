function distinctArray(ints) {
    let filtered = [];
    ints.filter(int => {
        if (!filtered.includes(int)) {
            filtered.push(int);
        }
    });
    console.log(filtered.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);