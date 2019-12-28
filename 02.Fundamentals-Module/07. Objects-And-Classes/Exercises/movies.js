function movies(arr) {
    let movies = [];

    for (const element of arr) {
        let value = element.split(" ");
        let name;
        let index;
        let currentObject;
        if (value[0] === "addMovie") {
            name = value.slice(1).join(" ");
            movies.push({ name });
        } else if (value.includes("directedBy")) {
            index = value.indexOf("directedBy");
            name = value.slice(0, index).join(" ");
            currentObject = movies.find(obj => obj.name === name);

            if (currentObject) {
                let director = value.slice(index + 1).join(" ");
                currentObject.director = director;
            }
        } else if (value.includes("onDate")) {
            index = value.indexOf("onDate");
            name = value.slice(0, index).join(" ");
            currentObject = movies.find(obj => obj.name === name);

            if (currentObject) {
                let date = value.slice(index + 1).join();
                currentObject.date = date;
            }
        }
    }

    const filtered = movies.filter(obj => Object.keys(obj).length === 3);

    for (const el of filtered) {
        console.log(JSON.stringify(el));
    }
}

movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);