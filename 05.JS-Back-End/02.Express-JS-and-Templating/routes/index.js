const express = require("express");
const Cube = require("../models/cube");
const Accessory = require("../models/accessory");
const { getCubes, getCube, updateCube, getCubeWithAccessories } = require("../controllers/cubes");
const { getAccessories } = require("../controllers/accessories");
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

    const newCube = new Cube({ name, description, imageUrl, difficulty });
    newCube.save();

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

router.get("/create/accessory", (req, res) => {
    res.render("createAccessory", {
        title: "Create accessory | Cube Workshop"
    });
});

router.post("/create/accessory", async (req, res) => {
    const { name, description, imageUrl } = req.body;

    const accessory = new Accessory({ name, description, imageUrl });
    await accessory.save();

    res.redirect("/");
});

router.get("/attach/accessory/:id", async (req, res) => {
    const id = req.params.id;
    const cube = await getCube(id);
    const accessories = await getAccessories();

    const unattachedAccessories = accessories.filter(acc => !cube.accessories.map(el => el.toString()).includes(acc._id.toString()));

    res.render("attachAccessory", {
        title: "Attach accessory | Cube Workshop",
        ...cube,
        accessories: unattachedAccessories,
        hasAllAccessories: accessories.length === cube.accessories.length
    });
});

router.post("/attach/accessory/:id", async (req, res) => {
    await updateCube(req.params.id, req.body.accessory);

    res.redirect(`/details/${req.params.id}`);
});

router.get("*", (req, res) => {
    res.render("404", {
        title: "Not found | Cube Workshop"
    });
});

module.exports = router;