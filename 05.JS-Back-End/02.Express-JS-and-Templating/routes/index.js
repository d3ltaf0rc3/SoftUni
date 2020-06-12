const express = require("express");
const { getCubes } = require("../controllers/cubes");
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

router.get("*", (req, res) => {
    res.render("404", {
        title: "Not found | Cube Workshop"
    });
});

module.exports = router;