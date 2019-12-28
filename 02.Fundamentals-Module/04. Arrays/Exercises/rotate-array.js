function rotateArr(strArr) {
    let rotations = Number(strArr.pop());

    for (let i = 1; i <= rotations; i++) {
        let lastEl = strArr.pop();
        strArr.unshift(lastEl);
    }

    if (isNaN(rotations)) {
        console.log("Empty");
    }
    else {
        console.log(strArr.join(" "));
    }
}

rotateArr(['remove', 'remove', 'remove']);