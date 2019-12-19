function printMatrix (n) {
    
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let i = 1; i <= n; i++) {
            row += n + " ";
        }
        console.log(row);
    }
}

printMatrix(7);