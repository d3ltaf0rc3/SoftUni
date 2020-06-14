const Cube = require("../models/cube");

async function getCubes() {
    const cubes = await Cube.find().lean();
    return cubes;
}

async function getCube(id) {
    const cube = await Cube.findById(id).lean();
    return cube;
}

async function updateCube(id, accessoryId) {
    await Cube.findByIdAndUpdate(id, {
        $addToSet: {
            accessories: [accessoryId]
        }
    });
}

async function getCubeWithAccessories(id) {
    const cube = await Cube.findById(id).populate("accessories").lean();
    return cube;
}

async function editCube(id, cube) {
    await Cube.findByIdAndUpdate(id, cube);
}

async function deleteCube(id) {
    await Cube.findByIdAndDelete({ _id: id });
}

module.exports = { getCubes, getCube, updateCube, getCubeWithAccessories, editCube, deleteCube };