function solve() {
    let string = document.getElementById("string").value;
    let text = document.getElementById("text").value;
    let output = document.getElementById("result");
    let coordinatesRegExp = /(?<directions>east|north).*?(?<coordinates>[0-9]{2})[^,]*,[^,]*?(?<decimals>[0-9]{6})/gmi;

    let message = text.split(string)[1];
    let coordinates = coordinatesRegExp.exec(text);
    let north;
    let east;

    while (coordinates) {
        if (coordinates[1].toLowerCase() === 'north') {
            north = `${coordinates[2]}.${coordinates[3]}`;
        } else {
            east = `${coordinates[2]}.${coordinates[3]}`;
        }

        coordinates = coordinatesRegExp.exec(text);
    }

    output.innerHTML = `
    <p>${north} N</p> 
    <p>${east} E</p> 
    <p>Message: ${message}</p> `;
}
