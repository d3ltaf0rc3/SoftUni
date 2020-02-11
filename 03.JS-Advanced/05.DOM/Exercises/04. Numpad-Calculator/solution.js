function solve() {
    let pad = document.getElementsByClassName("keys")[0];
    let output = document.getElementById("expressionOutput");
    let clearButton = document.getElementsByClassName("clear")[0];
    let result = document.getElementById("resultOutput");
    const operators = ["+", "-", "/", "*"];
    const operations = {
        "+": (num1, num2) => Number(num1) + Number(num2),
        "-": (num1, num2) => Number(num1) - Number(num2),
        "/": (num1, num2) => Number(num1) / Number(num2),
        "*": (num1, num2) => Number(num1) * Number(num2)
    };

    clearButton.addEventListener("click", () => {
        output.innerHTML = "";
        result.innerHTML = "";
    });

    pad.addEventListener("click", (e) => {
        if (!e.target.value) {
            return;
        }

        if (e.target.value === "=") {
            let params = output.innerHTML.split(" ");

            if (params[2] !== "") {
                result.innerHTML = operations[params[1]](params[0], params[2]);
                return;
            }

            result.innerHTML = NaN;
            return;
        }

        if (operators.includes(e.target.value)) {
            output.innerHTML += ` ${e.target.value} `;
            return;
        }
        output.innerHTML += e.target.value;
    });
}