const Cube = require("../models/cube");

const defaultCube = new Cube("default", "This is the default cube", "cube.jpg", 1);
defaultCube.save();