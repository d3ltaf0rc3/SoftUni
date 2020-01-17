function squareOfStars(size) {
    if (size === undefined) {
        createRectangle(5);
    } else {
        createRectangle(size);
    }
    function createRectangle(size) {
        for (let i = 1; i <= size; i++) {
            let result = "* ".repeat(size);
            console.log(result);
        }
    }
}

squareOfStars();