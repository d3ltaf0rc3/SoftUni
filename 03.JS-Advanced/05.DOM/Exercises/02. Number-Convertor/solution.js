function solve() {
    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');
    let menuTo = document.getElementById('selectMenuTo');
    
    binaryOption.textContent = 'Binary';
    hexadecimalOption.textContent =' Hexadecimal';
    
    binaryOption.setAttribute('value', 'binary');
    hexadecimalOption.setAttribute('value', 'hexadecimal');

    menuTo.appendChild(binaryOption);
    menuTo.appendChild(hexadecimalOption);

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', handler);

    function handler() {
        let number = document.getElementById('input').value;
        let value = menuTo.value;
        let resultBar = document.getElementById('result');
        console.log(resultBar);
        let result;
        
        if (value === "binary") {
            result = Number(number).toString(2);
        } else if (value === "hexadecimal") {
            result = Number(number).toString(16).toUpperCase();
        }
        resultBar.value = result;
    }
}