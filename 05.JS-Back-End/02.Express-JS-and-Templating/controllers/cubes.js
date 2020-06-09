const Cube = require("../models/cube");

async function getCubes() {
    const cubes = await Cube.find().lean();
    return cubes;
}

async function getCube(id) { 
    const cube = await Cube.findById(id).lean();
    return cube;
}

module.exports = { getCubes, getCube };