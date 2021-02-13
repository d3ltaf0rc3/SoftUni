function greetingByName(input) {
    let name = input.shift();

    console.log(`Hello, ${name}!`);
}

greetingByName(["John"]);