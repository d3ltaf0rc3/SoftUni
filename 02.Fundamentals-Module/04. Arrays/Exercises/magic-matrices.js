function magicMatrices(matrix) {
    let isMagic = true;
    let columnSum = 0;
    let rowSum = 0;
    let previousColumnSum = 0;
    let previousRowSum = 0;
    let counterRow = 1;
    let counterColumn = 1;

    function calcRowSum(row) {
        previousRowSum = rowSum;
        rowSum = 0;
        row.forEach(element => {
            rowSum += Number(element);
        });
        if (rowSum !== previousRowSum && counterRow > 1) {
            return true;
        }
        counterRow++;
        return false;
    }

    function calcColumnSum(index) {
        previousColumnSum = columnSum;
        columnSum = 0;
        matrix.forEach(array => {
            columnSum += Number(array[index]);
        });
        if (previousColumnSum !== columnSum && counterColumn > 1) {
            return true;
        }
        counterColumn++;
        return false;
    }

    for (let i = 0; i < matrix.length; i++) {
        let rowResult = calcRowSum(matrix[i]);
        let columnResult = calcColumnSum(i); 
        if (rowResult) {
            isMagic = false;
        }
        if (columnResult) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);