const express = require("express");
const jwt = require("jsonwebtoken");
const Cube = require("../models/cube");
const { getCubeWithAccessories } = require("../controllers/cubes");
const router = express.Router();

router.get("/edit", (req, res) => {
    res.render("editCubePage");
});

router.get("/delete", (req, res) => {
    res.render("deleteCubePage");
});

router.get("/create", (req, res) => {
    res.render("create", {
        title: "Create | Cube Workshop"
    });
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl, difficulty } = req.body;
    const token = req.cookies.aid;
    const decodedObj = jwt.verify(token, process.env.KEY);

    const newCube = new Cube({ name, description, imageUrl, difficulty, creatorId: decodedObj.userID });
    await newCube.save();

    res.redirect("/");
});

router.get("/details/:id", async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeWithAccessories(id);

    res.render("details", {
        title: "Details | Cube Workshop",
        ...cube
    });
});

module.exports = router;