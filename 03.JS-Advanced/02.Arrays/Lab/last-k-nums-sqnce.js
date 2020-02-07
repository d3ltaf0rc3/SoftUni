function lastKNums(n,k) {
    let sqnce = [1];
    for (let i = sqnce.length; i < n; i++) {
        let num = 0;
        if (i < k) {
            for (let k = 0; k < sqnce.length; k++) {
                num += sqnce[k];
            }
        } else {
            let elements = sqnce.slice(sqnce.length - k,sqnce.length);
            for (let j = 0; j < elements.length;j++) {
                num += elements[j];
            }
        }
        sqnce.push(num);
    }
    console.log(sqnce.join(" "));
}

lastKNums(6,3);