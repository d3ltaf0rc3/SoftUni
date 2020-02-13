function equalArrays(arr1, arr2) {
    let sum = 0;
    let areIdentical = true;
    
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
        } else {
            areIdentical = false;
            break;
        }
    }

    if (areIdentical === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
    }
}

equalArrays(['1'], ['10']);