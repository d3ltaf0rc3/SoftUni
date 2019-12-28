function arrRotation(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(" "));
}

arrRotation([51, 47, 32, 61, 21], 2);