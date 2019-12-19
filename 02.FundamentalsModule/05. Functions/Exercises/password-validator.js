function passwordValidator(password) {
    let isPassed = true;
    function checkLength(inputPassword) {
        if (inputPassword.length < 6 || inputPassword.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            isPassed = false;
        }
    }
    function checkSymbols(inputPassword) {
        if (!inputPassword.match("^[A-Za-z0-9]+$")) {
            console.log("Password must consist only of letters and digits");
            isPassed = false;
        }
    }
    function check2Digits(inputPassword) {
        let counter = 1;
        for (let i = 0; i < inputPassword.length; i++) {
            let digit = Number(inputPassword[i]);
            if (!isNaN(digit)) {
                if (counter === 2) {
                    return true;
                }
                counter++;
            }
        }
        console.log("Password must have at least 2 digits");
        isPassed = false;
    }
    checkLength(password);
    checkSymbols(password);
    check2Digits(password);
    if (isPassed) {
        console.log("Password is valid");
    }
}

passwordValidator('MyPass123');