function addAndRemoveFromArr(array) {
    let numArr = [];
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command === "add") {
            numArr.push(i + 1);
        } else {
            numArr.pop();
        }
    }
    if (numArr.length === 0) {
        console.log("Empty");
    } else {
        console.log(numArr.join(" "));
    }
}

addAndRemoveFromArr(['remove', 'remove', 'remove']);