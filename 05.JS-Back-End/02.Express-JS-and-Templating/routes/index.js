const express = require("express");
const Cube = require("../models/cube");
const { getCubes, getCube } = require("../controllers/cubes");
const router = express.Router();

router.get("/", async (req, res) => {
    res.render("index", {
        title: "Home | Cube Workshop",
        cubes: await getCubes()
    });
});

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About | Cube Workshop"
    });
});

router.get("/create", (req, res) => {
    res.render("create", {
        title: "Create | Cube Workshop"
    });
});

router.post("/create", (req, res) => {
    const { name, description, imageUrl, difficulty } = req.body;

    const newCube = new Cube({name, description, imageUrl, difficulty});
    newCube.save();

    res.redirect("/");
});

router.get("/details/:id", async (req, res) => {
    const id = req.params.id;
    const cube = await getCube(id);

    res.render("details", {
        title: "Details | Cube Workshop",
        ...cube
    });
});

router.get("*", (req, res) => {
    res.render("404", {
        title: "Not found | Cube Workshop"
    });
});

module.exports = router;