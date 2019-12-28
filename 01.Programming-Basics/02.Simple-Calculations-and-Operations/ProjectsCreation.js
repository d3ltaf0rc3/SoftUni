function projects(input) {
    let name = input.shift();
    let projects = Number(input.shift());
    let timeToComplete = projects * 3;

    console.log(`The architect ${name} will need ${timeToComplete} hours to complete ${projects} project/s.`);
}

projects(["George", 4]);