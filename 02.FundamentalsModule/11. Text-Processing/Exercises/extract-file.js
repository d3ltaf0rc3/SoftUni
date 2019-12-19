function extractFile(string) {
    let input = string.split("\\");
    let file = input[input.length - 1];
    let i = file.lastIndexOf(".");
    
    console.log(`File name: ${file.substring(0, i)}\nFile extension: ${file.substr(i).substr(1)}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');