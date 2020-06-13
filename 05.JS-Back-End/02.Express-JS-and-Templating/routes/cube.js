const express = require("express");
const jwt = require("jsonwebtoken");
const Cube = require("../models/cube");
const { getCubeWithAccessories } = require("../controllers/cubes");
const { checkAuth, isLogged, checkAuthJSON } = require("../controllers/user");
const router = express.Router();

router.get("/edit", checkAuth, isLogged, (req, res) => {
    res.render("editCubePage", {
        title: "Edit Cube | Cube Workshop",
        isLoggedIn: req.isLoggedIn
    });
});

router.get("/delete", checkAuth, isLogged, (req, res) => {
    res.render("deleteCubePage", {
        title: "Delete Cube | Cube Workshop",
        isLoggedIn: req.isLoggedIn
    });
});

router.get("/create", checkAuth, isLogged, (req, res) => {
    res.render("create", {
        title: "Create | Cube Workshop",
        isLoggedIn: req.isLoggedIn
    });
});

router.post("/create", checkAuthJSON, async (req, res) => {
    const { name, description, imageUrl, difficulty } = req.body;
    const token = req.cookies.aid;
    const decodedObj = jwt.verify(token, process.env.KEY);

    const newCube = new Cube({ name, description, imageUrl, difficulty, creatorId: decodedObj.userID });
    await newCube.save();

    res.redirect("/");
});

router.get("/details/:id", isLogged, async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeWithAccessories(id);

    res.render("details", {
        title: "Details | Cube Workshop",
        ...cube,
        isLoggedIn: req.isLoggedIn
    });
});

module.exports = router;