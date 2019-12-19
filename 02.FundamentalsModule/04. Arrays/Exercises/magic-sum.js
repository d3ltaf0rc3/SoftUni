function magicSum(arr, number) {
    let inclIndexes = [];
    arr.forEach((element, index) => {
        for (let i = 0; i < arr.length; i++) {
            const secondElement = arr[i];
            let checkIndex = index !== i;
            let isIncluded = inclIndexes.includes(index) && inclIndexes.includes(i);
            let sum = element + secondElement === number;
            if (sum && checkIndex && !isIncluded) {
                console.log(element, secondElement);
                inclIndexes.push(index,i);
            }
        }
    });
}

magicSum([1, 2, 3, 4, 5, 6], 6);