function GreetingByName(input){
    let name = input.shift();
    
    console.log(`Hello, ${name}!`);
}

GreetingByName(["Martin"]);