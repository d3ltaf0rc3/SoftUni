const db = require("../config/database.json");

function getCubes() {
    return db;
}

function getCube(id) {
    const cube = db.find(obj => obj.id === id);
    return cube;
}

module.exports = { getCubes, getCube };