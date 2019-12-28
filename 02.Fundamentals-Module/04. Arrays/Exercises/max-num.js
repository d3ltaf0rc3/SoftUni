function maxNum(arr) {
    let isBigger = true;
    let topInts = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const nextEl = arr[j];
            if (element <= nextEl){
                isBigger = false;
            }
        }
        if (isBigger === true) {
            topInts += element + " ";
        }
        isBigger = true;
    }
    console.log(topInts);
}

maxNum([14, 24, 3, 19, 15, 17]);