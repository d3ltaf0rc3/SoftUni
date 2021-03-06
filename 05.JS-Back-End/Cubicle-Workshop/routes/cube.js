const express = require("express");
const jwt = require("jsonwebtoken");
const Cube = require("../models/cube");
const { getCubeWithAccessories, editCube, getCube, deleteCube } = require("../controllers/cubes");
const { checkAuth, isLogged, checkAuthJSON, isCreator } = require("../controllers/user");
const router = express.Router();

router.get("/edit/:id", checkAuth, isLogged, async (req, res) => {
    const cube = await getCube(req.params.id);
    res.render("editCubePage", {
        title: "Edit Cube | Cube Workshop",
        isLoggedIn: req.isLoggedIn,
        ...cube
    });
});

router.post("/edit/:id", checkAuthJSON, async (req, res) => {
    const result = await isCreator(req);
    if (!result) {
        return res.redirect(`/details/${req.params.id}`);
    }

    const { name, description, imageUrl, difficulty } = req.body;
    const token = req.cookies.aid;
    const decodedObj = jwt.verify(token, process.env.KEY);

    await editCube(req.params.id, { name, description, imageUrl, difficulty, creatorId: decodedObj.userID });

    res.redirect("/");
});

router.get("/delete/:id", checkAuth, isLogged, async (req, res) => {
    const cube = await getCube(req.params.id);
    res.render("deleteCubePage", {
        title: "Delete Cube | Cube Workshop",
        isLoggedIn: req.isLoggedIn,
        ...cube
    });
});

router.post("/delete/:id", checkAuthJSON, async (req, res) => {
    const result = await isCreator(req);
    if (!result) {
        return res.redirect(`/details/${req.params.id}`);
    }

    await deleteCube(req.params.id);
    res.redirect("/");
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

    try {
        const newCube = new Cube({
            name: name.trim(),
            description: description.trim(),
            imageUrl,
            difficulty,
            creatorId: decodedObj.userID
        });
        await newCube.save();
        return res.redirect("/");
    } catch (error) {
        res.render("create", {
            title: "Create | Cube Workshop",
            isLoggedIn: req.isLoggedIn,
            error: true,
            message: "Invalid cube details!"
        });
    }
});

router.get("/details/:id", isLogged, async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeWithAccessories(id);
    const result = await isCreator(req);

    res.render("details", {
        title: "Details | Cube Workshop",
        ...cube,
        isLoggedIn: req.isLoggedIn,
        isCreator: result
    });
});

module.exports = router;