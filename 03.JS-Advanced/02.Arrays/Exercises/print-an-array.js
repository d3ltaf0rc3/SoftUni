function printArr(arr) {
    let delimiter = arr.pop();
    console.log(arr.join(delimiter));
}

printArr();