function commissions(input) {
    let city = input.shift();
    let sales = Number(input.shift());
    let commission = 0;

    if (city === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            commission = 0.05 * sales;
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.07 * sales;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.08 * sales;
        } else if (sales > 10000) {
            commission = 0.12 * sales;
        }
    } else if (city === "Varna") {
        if (sales >= 0 && sales <= 500) {
            commission = 0.045 * sales;
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.075 * sales;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.1 * sales;
        } else if (sales > 10000) {
            commission = 0.13 * sales;
        }
    } else if (city === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            commission = 0.055 * sales;
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.08 * sales;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.12 * sales;
        } else if (sales > 10000) {
            commission = 0.145 * sales;
        }
    }

    if (commission > 0) {
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }
}

commissions(["Plovdiv", 8543.86]);