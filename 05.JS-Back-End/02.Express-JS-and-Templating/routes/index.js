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