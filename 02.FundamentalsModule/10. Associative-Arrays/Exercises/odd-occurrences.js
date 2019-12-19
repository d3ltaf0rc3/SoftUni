function oddOccurrences(input) {
    let langs = input.split(" ");
    let elements = new Map();

    langs.forEach(element => {
        element = element.toLowerCase();
        if (elements.has(element)) {
            let value = elements.get(element);
            elements.set(element, value + 1);
        } else {
            elements.set(element, 1);
        }
    });
    elements = Array.from(elements.entries());
    let result = "";
    for (let kvp of elements) {
        if (kvp[1] % 2 != 0) {
            result += kvp[0] + " ";
        }
    }
    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');