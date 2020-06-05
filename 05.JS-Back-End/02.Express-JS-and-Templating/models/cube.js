const { v4 } = require("uuid");
const fs = require("fs");
const db = require("../config/database.json");

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = v4();
        this.name = name || "No name";
        this.description = description || "No description";
        this.imageUrl = imageUrl || "placeholder.jpg";
        this.difficulty = difficulty || 1;
    }

    save() {
        const data = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty
        };

        db.push(data);

        fs.writeFile("./config/database.json", JSON.stringify(db), (err) => {
            if (err) throw err;
        });
    }
}

module.exports = Cube;