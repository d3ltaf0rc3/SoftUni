function solve() {
    let input = document.getElementsByTagName("input")[0];
    let button = document.getElementsByTagName("button")[0];
    let list = document.getElementsByTagName("ol")[0];
    const alphabet = {
        "A":0,
        "B":1,
        "C":2,
        "D":3,
        "E":4,
        "F":5,
        "G":6,
        "H":7,
        "I":8,
        "J":9,
        "K":10,
        "L":11,
        "M":12,
        "N":13,
        "O":14,
        "P":15,
        "Q":16,
        "R":17,
        "S":18,
        "T":19,
        "U":20,
        "V":21,
        "W":22,
        "X":23,
        "Y":24,
        "Z":25
    };

    button.addEventListener("click", () => {
        let name = input.value;
        let firstLetter = name[0].toUpperCase();
        let liNum = alphabet[firstLetter];
        let li = list.children[liNum];
        name = firstLetter + name.substring(1).toLocaleLowerCase();
        
        if (li.innerHTML === "") {
            li.innerHTML = name;
        } else {
            li.innerHTML += `, ${name}`;
        }
    });
}