const express = require("express");
const { getCubes } = require("../controllers/cubes");
const { isLogged } = require("../controllers/user");
const router = express.Router();

router.get("/", isLogged, async (req, res) => {
    res.render("index", {
        title: "Home | Cube Workshop",
        cubes: await getCubes(),
        isLoggedIn: req.isLoggedIn
    });
});

router.post("/search", isLogged, async (req, res) => {
    const { search, from, to } = req.body;

    let cubes = (await getCubes()).filter(cb => {
        return cb.name.toLowerCase().includes(search.toLowerCase());
    });

    if (from && to) {
        cubes = cubes.filter(cb => cb.difficulty >= from && cb.difficulty <= to);
    }

    res.render("index", {
        title: "Home | Cube Workshop",
        cubes,
        isLoggedIn: req.isLoggedIn
    });
});

router.get("/about", isLogged, (req, res) => {
    res.render("about", {
        title: "About | Cube Workshop",
        isLoggedIn: req.isLoggedIn
    });
});

router.get("*", isLogged, (req, res) => {
    res.render("404", {
        title: "Not found | Cube Workshop",
        isLoggedIn: req.isLoggedIn
    });
});

module.exports = router;