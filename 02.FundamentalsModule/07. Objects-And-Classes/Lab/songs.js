function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let num = Number(input.shift());
    let list = input.pop();

    for (let i = 0; i < num; i++) {
        let [type, name, time] = input[i].split("_");
        songs.push(new Song(type, name, time));
    }
    if (list === "all") {
        songs.forEach(el => console.log(el.name));
    } else {
        let filtered = songs.filter(el => el.type === list);
        filtered.forEach(el => console.log(el.name));
    }
}

songs();