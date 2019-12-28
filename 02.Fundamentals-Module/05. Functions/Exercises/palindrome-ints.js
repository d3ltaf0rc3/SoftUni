function palindromeInts(positiveInts) {
    let num = 0;
    
    function checkIfPalindrome(inputNum) {
        let reverseNum = "";
        for (let i = inputNum.length - 1; i >= 0; i--) {
            let digit = inputNum[i];
            reverseNum += digit;
        }
        if (reverseNum === inputNum) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = 0; i < positiveInts.length; i++) {
        num = String(positiveInts[i]);
        console.log(checkIfPalindrome(num));
    }
}

palindromeInts([123, 323, 421, 121]);