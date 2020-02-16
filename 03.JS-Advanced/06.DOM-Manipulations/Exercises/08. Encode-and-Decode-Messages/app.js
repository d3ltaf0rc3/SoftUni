function encodeAndDecodeMessages() {
    let encodeBttn = document.getElementsByTagName("button")[0];
    let decodeBttn = document.getElementsByTagName("button")[1];
    let output = document.getElementsByTagName("textarea")[1];

    encodeBttn.addEventListener("click", () => {
        let input = document.getElementsByTagName("textarea")[0];
        let encoded = "";
        Array.from(input.value).forEach(letter => {
            let ascii = letter.charCodeAt(0) + 1;
            encoded += String.fromCharCode(ascii);
        });
        input.value = "";
        output.value = encoded;
    });

    decodeBttn.addEventListener("click", function decode() {
        let encoded = output;
        let decoded = "";
        Array.from(encoded.value).forEach(letter => {
            let ascii = letter.charCodeAt(0) - 1;
            decoded += String.fromCharCode(ascii);
        });
        output.value = decoded;
        decodeBttn.removeEventListener("click", decode);
    });
}